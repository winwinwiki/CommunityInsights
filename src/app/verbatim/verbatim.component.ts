import { Component, OnInit, ViewChild } from "@angular/core";
import { NgbPanelChangeEvent, NgbAccordion } from "@ng-bootstrap/ng-bootstrap";
import { map, mergeMap } from "rxjs/operators";
import { DataTransferService } from ".././data-transfer.service";
import { Observable, forkJoin, combineLatest, Subscription } from "rxjs";

import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

import PubSub from "@aws-amplify/pubsub";
import API from "@aws-amplify/api";
import awsmobile from "../../aws-exports";

Amplify.configure(awsmobile);
PubSub.configure(awsmobile);

import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";

import Amplify, { Auth } from "aws-amplify";
import { comment, post } from "./dataVerbatim";
import { FormArray, FormControl, FormGroup, FormBuilder } from "@angular/forms";
import {
  ComponentRef,
  ComponentFactoryResolver,
  ViewContainerRef,
  ElementRef
} from "@angular/core";
// import json data from assets
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { MatChipInputEvent } from "@angular/material/chips";
import { FilterDiscoursePipe } from "./filter-discourse.pipe";
import * as SDGTree from "../../assets/SDGTree.json";
import * as SPITree from "../../assets/SPITree.json";
import * as TSFTree from "../../assets/TSFTree.json";
import * as NewImpactTree from "../../assets/NewImpactTree.json";
import * as tags from "../../assets/impact_tags.json";

@Component({
  selector: "app-verbatim",
  templateUrl: "./verbatim.component.html",
  styleUrls: ["./verbatim.component.css"],
  providers: [FilterDiscoursePipe]
})
export class VerbatimComponent implements OnInit {
  @ViewChild("myaccordion", { static: true }) accordion: NgbAccordion;
  subscription: Subscription;
  // get json data from import
  SDGTree = (SDGTree as any).default;
  SPITree = (SPITree as any).default;
  TSFTree = (TSFTree as any).default;
  NewImpactTree = (NewImpactTree as any).default;
  tags = (tags as any).default;
  
  // variables related to UI behavior
  loading = true;
  show = false;
  empty: boolean = true;
  p: number = 0;
  pageSize: number = 10;

  //  variables left by Akriti
  start = String;
  end = String;
  text = "";
  dates = [];
  showCardBody = false;
  flatView = true;
  otherComments = [];
  keys: Array<number>;
  items: any;
  region: string;
  changedObjtext: string;
  changedObjLocation: string;
  parent_region: string;
  
  // variables used for filter pipe
  impactIds = [];
  filterImpact = [];
  getTopics = [];
  impactTreeData = [];
  checkboxes: any;
  filterForm: FormGroup;

  // whether the filter drawer is open
  isOn: boolean = false;

  // variables to store discourse data
  filteredDiscourses = [];
  filteredDiscoursesCopy = [];
  discourseDetails = [];

  // variables related to filter search bar 
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  searchStrings: string[] = [];

  // variables relatede to thread view
  isThreadView: boolean = false;

  // variables related to total count of discourses
  count;
  filteredDiscourseCount;
  countCopy;

  // variables related UI error message
  MESSAGE_TIMEOUT = "Query timed out. Please shorten your date range.";
  MESSAGE_NODATA = "No data found for current search.";
  MESSAGE_NODATA_FILTER = "No data found for current filter settings.";
  message: String = this.MESSAGE_NODATA;

  

  constructor(
    private data: DataTransferService,
    private apollo: Apollo,
    private fb: FormBuilder,
    private pipe: FilterDiscoursePipe
  ) {}

  ngOnInit(): void {
    this.initFilterFormControlGroup();
    this.initCheckboxes();
    this.subscription = combineLatest(
      this.data.share,
      this.data.locationshare,
      this.data.impactidshare
    ).subscribe(([text, location, impactIds]) => {
      if (
        this.changedObjtext != text ||
        this.changedObjLocation != location[0]
      ) {
        this.changedObjtext = text;
        this.impactIds = impactIds;
        this.changedObjLocation = location[0];
        this.dates = text.split(" to ");
        this.start = this.dates[0];
        this.end = this.dates[1];
        this.region = (location[0] + "").split(" - ")[0];
        this.parent_region = (location[0] + "").split(" - ")[1];
        // console.log(this.region)
        this.createVerbatimView();
      }
    });
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || "").trim()) {
      this.searchStrings.push(value.trim());
    }
    // Reset the input value
    if (input) {
      input.value = "";
    }
  }

  remove(chip: any): void {
    const index = this.searchStrings.indexOf(chip);

    if (index >= 0) {
      this.searchStrings.splice(index, 1);
    }
  }

  mappingData(impactAreaIds, frameworkQueries) {
    this.impactTreeData = [];

    impactAreaIds.forEach(x => {
      if (x.impact_area_id && x.impact_area_id.indexOf(",") > 0)
        var ids = x.impact_area_id.split(",");
      else if (x.impact_area_id) {
        for (var i = 0; i < frameworkQueries.length; i++) {
          for (var j = 0; j < ids.length; j++) {
            if (j === frameworkQueries[i].impact_area_id) {
              this.impactTreeData.push(
                Object.assign({}, x, frameworkQueries[i])
              );
            }
          }
        }
      }
    });
    return this.impactTreeData;
  }

  createVerbatimView() {
    this.loading = true;
    this.p = 0;
    this.empty = true;
    this.discourseDetails = [];
    this.filteredDiscourses = [];
    this.apollo
      .query<any>({
        query: gql`
          query getDiscourseCount(
            $start: String!
            $end: String!
            $region: String!
          ) {
            getDiscourseCount(start: $start, end: $end, region: $region) {
              count
            }
          }
        `,
        variables: {
          start: this.start,
          end: this.end,
          region: this.region
        }
      })
      .subscribe(
        ({ data, loading }) => {
          if (data && data.getDiscourseCount != null) {
            this.count = data && data.getDiscourseCount.count;
            this.filteredDiscourseCount = this.count;
            if(this.count==0) {
              this.empty = true;
              this.loading = false;
              return;
            }
            this.discourseDetails = Array(this.count).fill(0);
          } 
        },
        error => {
          this.message = this.MESSAGE_TIMEOUT;
        }
      );
    this.initializeDiscourseData();
  }
  initializeDiscourseData() {
    this.apollo
      .query<any>({
        query: gql`
          query listDiscourseData(
            $start: String!
            $end: String!
            $region: String!
            $offset: Int!
            $limit: Int!
          ) {
            listDiscourseData(
              start: $start
              end: $end
              region: $region
              offset: $offset
              limit: $limit
            ) {
              Topics
              discourse_id
              comment
              sentiment
              platform_name
              created_time
              impact_area_id
              isPost
              post_id
              url
              type
            }
          }
        `,
        variables: {
          start: this.start,
          end: this.end,
          region: this.region,
          limit: 2000,
          offset: 0
        }
      })
      .subscribe(
        ({ data, loading }) => {
          if (data && data.listDiscourseData != null) {
            var result = data && data.listDiscourseData;
            result.forEach(function(item, index) {
              this[0 + index] = item;
            }, this.discourseDetails);
            this.filteredDiscourses = this.discourseDetails;
          } 
          this.items = new Map<number, post>();
          this.fetchPostFromResponse(this.discourseDetails);
          this.populateComments(this.discourseDetails);
          this.keys = Array.from(this.items.keys());
        },
        error => {
          this.message = this.MESSAGE_TIMEOUT;
        }
      )
      .add(() => {
        if (this.discourseDetails.length != 0) {
          this.empty = false;
        }else{
          this.empty = true;
        }
        this.loading = false;
      });
  }

  filterDiscourseData(offset) {
    if (this.discourseDetails[offset] == 0) {
      this.loading = true;
      this.apollo
        .query<any>({
          query: gql`
            query filterDiscourseData(
              $start: String!,
              $end: String!
              $region: String!
              $limit: Int!
              $offset: Int!
              $search: String!
              $impactarea: String!
              $source: String!
              $sentiment: String!
              $parent: String
              $tag: String
            ) {
              filterDiscourseData(
                start: $start
                end: $end
                region: $region
                search: $search
                offset: $offset
                limit: $limit
              ) {
                Topics
                discourse_id
                comment
                sentiment
                platform_name
                created_time
                impact_area_id
                isPost
                post_id
                url
                type
              }
            }
          `,
          variables: {
            start: this.start,
            end: this.end,
            region: this.region,
            limit: 2000,
            offset: offset
          }
        })
        .subscribe(
          ({ data, loading }) => {
            var result = data && data.listDiscourseData;
            result.forEach(function(item, index) {
              this[offset + index] = item;
            }, this.discourseDetails);
            // console.log(this.discourseDetails);
            this.filteredDiscourses = this.discourseDetails;
            this.items = new Map<number, post>();
            this.fetchPostFromResponse(this.discourseDetails);
            this.populateComments(this.discourseDetails);
            this.keys = Array.from(this.items.keys());
          },
          error => {}
        )
        .add(() => {
          this.loading = false;
        });
    }
  }
  

  updateDiscourseData(offset) {
    if (this.discourseDetails[offset] == 0) {
      this.loading = true;
      this.apollo
        .query<any>({
          query: gql`
            query listDiscourseData(
              $start: String!
              $end: String!
              $region: String!
              $offset: Int!
              $limit: Int!
            ) {
              listDiscourseData(
                start: $start
                end: $end
                region: $region
                offset: $offset
                limit: $limit
              ) {
                Topics
                discourse_id
                comment
                sentiment
                platform_name
                created_time
                impact_area_id
                isPost
                post_id
                url
                type
              }
            }
          `,
          variables: {
            start: this.start,
            end: this.end,
            region: this.region,
            limit: 2000,
            offset: offset
          }
        })
        .subscribe(
          ({ data, loading }) => {
            var result = data && data.listDiscourseData;
            result.forEach(function(item, index) {
              this[offset + index] = item;
            }, this.discourseDetails);
            // console.log(this.discourseDetails);
            this.filteredDiscourses = this.discourseDetails;
            this.items = new Map<number, post>();
            this.fetchPostFromResponse(this.discourseDetails);
            this.populateComments(this.discourseDetails);
            this.keys = Array.from(this.items.keys());
          },
          error => {}
        )
        .add(() => {
          this.loading = false;
        });
    }
  }
  populateComments(verbatimData) {
    this.otherComments = [];
    for (let i = 0; i < verbatimData.length; i++) {
      if (verbatimData[i].isPost == false) {
        let comment = {
          comment_id: 0,
          created_time: "",
          content: "",
          contentLength: 0,
          platform_name: "",
          region: "",
          impact_area_id: "",
          topics: "",
          sentiment: 0
        };
        comment.comment_id = verbatimData[i].discourse_id;
        comment.created_time = verbatimData[i].created_time;
        comment.platform_name = verbatimData[i].platform_name;
        comment.content = verbatimData[i].comment;
        comment.contentLength = verbatimData[i].comment.length;
        comment.region = verbatimData[i].region;
        comment.impact_area_id = verbatimData[i].impact_area_id;
        comment.topics = verbatimData[i].topics;
        comment.sentiment = verbatimData[i].sentiment;

        if (this.items.get(verbatimData[i].post_id)) {
          let currentPost = this.items.get(verbatimData[i].post_id);
          currentPost.comments.push(comment);
          this.items.set(verbatimData[i].post_id, currentPost);
        } else this.otherComments.push(comment);
      }
    }
  }

  fetchPostFromResponse(verbatimData) {
    for (let i = 0; i < verbatimData.length; i++) {
      if (verbatimData[i].isPost == true) {
        let post = {
          post_id: 0,
          comments: [],
          content: "",
          contentLength: 0,
          platform_name: "",
          created_time: "",
          region: "",
          impact_area_id: "",
          sentiment: 0,
          topics: ""
        };
        post.post_id = verbatimData[i].discourse_id;
        post.comments = [];
        post.content = verbatimData[i].comment;
        post.contentLength = verbatimData[i].comment.length;
        post.platform_name = verbatimData[i].platform_name;
        post.created_time = verbatimData[i].created_time;
        post.region = verbatimData[i].region;
        post.impact_area_id = verbatimData[i].impact_area_id;
        post.sentiment = verbatimData[i].sentiment;
        this.items.set(verbatimData[i].discourse_id, post);
      }
    }
  }

  showDetails(event) {
    this.showCardBody = !this.showCardBody;
  }

  initFilterFormControlGroup() {
    this.filterForm = this.fb.group({
      impact_child: new FormArray([]),
      source: new FormArray([]),
      type: new FormArray([]),
      sentiment: new FormArray([])
    });
    for (var i = 0; i < 320; i++) {
      this.impact_child.push(new FormControl(false));
    }
  }
  get impact_child() {
    return this.filterForm.get("impact_child") as FormArray;
  }

  CheckAllOptions(checkboxes, field) {
    const formArray: FormArray = this.filterForm.get(field) as FormArray;
    // first clear up the impact_child array
    formArray.clear();
    if (checkboxes.every(val => val.checked == true)) {
      // if all checkboxes were selected, then de-select them
      checkboxes.forEach(val => {
        val.checked = false;
      });
    } else {
      checkboxes.forEach(val => {
        val.checked = true;
        formArray.push(new FormControl(val.value)); // add all children to impact_child array
      });
    }
    // console.log(this.filterForm.value);
  }

  CheckAllOptions1(checkboxes) {
    if (
      checkboxes.every(
        val => this.impact_child.controls[val.value - 1].value == true
      )
    )
      // if all checkboxes were selected, then de-select them
      checkboxes.forEach(val => {
        this.impact_child.controls[val.value - 1].setValue(false);
      });
    else
      checkboxes.forEach(val => {
        this.impact_child.controls[val.value - 1].setValue(true);
      });
  }

  updateFilterForm(field, value, event) {
    const formArray: FormArray = this.filterForm.get(field) as FormArray;
    if (event.checked) {
      formArray.push(new FormControl(value));
    } else {
      let i: number = 0;
      formArray.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value == value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  applyFilter() {
    this.loading = true;
    var filterArgs = {};
    filterArgs["search_text"] = this.searchStrings;
    filterArgs[
      "impact_area_id"
    ] = this.filterForm.value.impact_child.flatMap((bool, index) =>
      bool ? index + 1 : []
    );
    filterArgs["sentiment"] = this.filterForm.value.sentiment;
    filterArgs["source"] = this.filterForm.value.source;
    filterArgs["type"] = this.filterForm.value.type;
    this.filteredDiscourses = this.pipe.transform(
      this.discourseDetails,
      filterArgs
    );
    // need to update count here
    this.filteredDiscourseCount = this.filteredDiscourses.length;
    this.p = 0;
    this.loading = false;
    this.isOn = false;
  }
  reset() {
    this.initCheckboxes();
    this.initFilterFormControlGroup();
    this.searchStrings = [];
    this.filteredDiscourses = this.discourseDetails;
    this.filteredDiscourseCount = this.count;
  }

  initCheckboxes() {
    this.checkboxes = {
      impact: {
        SDG: this.SDGTree,
        SPI: this.SPITree,
        TSF: this.TSFTree,
        NewImpact: this.NewImpactTree
      },
      source: [
        { label: "Facebook", checked: false, value: "Facebook" },
        { label: "Reddit", checked: false, value: "Reddit" },
        { label: "Twitter", checked: false, value: "Twitter" }
      ],
      type: [
        { label: "Comment", checked: false, value: "Comment" },
        { label: "Paraphrase", checked: false, value: "Paraphrase" },
        { label: "Proposal", checked: false, value: "Proposal" },
        { label: "Question", checked: false, value: "Question" },
        { label: "Suggestion", checked: false, value: "Suggestion" }
      ],
      sentiment: [
        { label: "Positive", checked: false, value: 1 },
        { label: "Neutral", checked: false, value: 0 },
        { label: "Negative", checked: false, value: -1 }
      ]
    };
  }

  beforeChange($event: NgbPanelChangeEvent) {
    console.log($event.panelId);
    if ($event.panelId === "panelOne") {
      $event.preventDefault();
    }

    if ($event.panelId === "panelTwo" && $event.nextState === false) {
      $event.preventDefault();
    }
  }
  showText(e) {
    var className = e.target.previousElementSibling;
    if (className.classList.contains("opened")) {
      className.classList.remove("opened");
      e.target.innerText = "Show More";
      className.classList.add("closed");
      this.show = false;
    } else if (className.classList.contains("closed")) {
      className.classList.remove("closed");
      e.target.innerText = " Show Less";
      className.classList.add("opened");
      this.show = true;
    }
  }
  onPageChange(event: any) {
    this.p = event.pageIndex;
    this.pageSize = event.pageSize;
    // console.log(this.p, this.pageSize);
    if ((this.p * this.pageSize) % 2000 != 0) {
      var offset = Math.floor((this.p * this.pageSize) / 2000) * 2000;
      this.updateDiscourseData(offset);
    } else {
      this.updateDiscourseData(this.p * this.pageSize);
    }
  }
  onToggleChange(event: any, discourse: any) {
    this.isThreadView = event.checked;
    if (this.isThreadView) {
      this.loading = true;
      this.filteredDiscoursesCopy = this.filteredDiscourses;
      this.countCopy = this.filteredDiscourseCount;
      this.apollo
        .query<any>({
          query: gql`
            query getThread($post_id: Int) {
              getThread(post_id: $post_id) {
                Topics
                discourse_id
                comment
                sentiment
                platform_name
                created_time
                impact_area_id
                isPost
                post_id
                url
                type
              }
            }
          `,
          variables: {
            post_id: discourse.isPost
              ? discourse.discourse_id
              : discourse.post_id
          }
        })
        .subscribe(
          ({ data, loading }) => {
            this.filteredDiscourses = data && data.getThread;
            this.filteredDiscourseCount = this.filteredDiscourses.length;
          },
          error => {}
        )
        .add(() => {
          this.p = 0;
          this.loading = false;
        });
    } else {
      this.filteredDiscourses = this.filteredDiscoursesCopy;
      this.filteredDiscourseCount = this.countCopy;
    }
  }
}
