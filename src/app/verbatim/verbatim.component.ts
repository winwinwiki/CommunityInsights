import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbPanelChangeEvent, NgbAccordion } from '@ng-bootstrap/ng-bootstrap';

import { map, mergeMap } from 'rxjs/operators';
import { DataTransferService } from '.././data-transfer.service';
import { Observable, forkJoin, combineLatest, Subscription } from 'rxjs';


import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

import PubSub from '@aws-amplify/pubsub';
import API from '@aws-amplify/api';
import awsmobile from '../../aws-exports';

Amplify.configure(awsmobile);
PubSub.configure(awsmobile)

import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';

import Amplify, { Auth } from 'aws-amplify';
import { pluck } from 'rxjs/operators';
import {comment, post} from './dataVerbatim';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-verbatim',
  templateUrl: './verbatim.component.html',
  styleUrls: ['./verbatim.component.css']
})
export class VerbatimComponent implements OnInit {
  loading = true;
  error: any;
  show = false;
  empty: boolean = false;
  start = String;
  end= String; 
  text = '';
  dates=[];

  discourseDetails = [];
  filterImpact = [];
  getTopics = [];
  impactTreeData = [];
  p: number = 1;
  showCardBody = false;
  flatView = true;
  otherComments = [];
  subscription: Subscription;
  impactIds= [];

  @ViewChild('myaccordion', {static : true}) accordion: NgbAccordion;
  final: any;

  keys: Array<number>;
  items: any;
  region: string;
  changedObjtext: string;
  changedObjLocation: string;
  parent_region: string;
  constructor(private data: DataTransferService,private apollo: Apollo) { }
  isOn: boolean;

  mappingData(impactAreaIds, frameworkQueries){
    this.impactTreeData = [];

    impactAreaIds.forEach(x => {
      if(x.impact_area_id && x.impact_area_id.indexOf(',') > 0)
      var ids= x.impact_area_id.split(',');
      else if(x.impact_area_id){

        for(var i = 0; i<frameworkQueries.length;i++){
          for(var j =0; j<ids.length; j++){
            if(j === frameworkQueries[i].impact_area_id){
              this.impactTreeData.push(Object.assign({}, x, frameworkQueries[i]));
            }
          }
          }
         }
      });
      console.log('[[[[[[[[[[[[[[[[[[', this.impactTreeData);
    return this.impactTreeData;
  }

  createVerbatimView(){
    this.loading = true;
    this.discourseDetails= [];
    this.apollo
      .query<any>({
        query: gql`
            query listDiscourseData($start: String!, $end: String!, $region: String!) {
              listDiscourseData (start: $start, end: $end, region: $region){
              discourse_id
              comment
              region
              sentiment
              platform_name
              created_time
              impact_area_id
              isPost
              post_id
            }
          }
        `, 
        variables: {
          start: this.start,
          end: this.end,
          region: "King County"
        }
      })
      .subscribe(
        ({ data, loading }) => {
          this.discourseDetails = data && data.listDiscourseData;
          this.items= new Map<number, post>();
          this.fetchPostFromResponse(this.discourseDetails);
          this.populateComments(this.discourseDetails);
          this.keys = Array.from(this.items.keys());
        },error => {
          this.error = error;
          console.log("error is: ", error);
        }
      ).add(() => {
        if (this.discourseDetails.length!=0){
          this.empty = false;
          var filterImpactAreas= this.mappingData(this.discourseDetails, this.impactIds);

          var output = filterImpactAreas.reduce((a, b) => {
            if (!a.some(({ tag }) => tag == b.tag)) {
              a.push({ impactArea: b.source_ontology, tag: b.tag, count: 1 });
            } else {
              a.find(({ tag }) => tag == b.tag).count++;
            }
            return a;
          }, []);
          
          console.log('>>>>>',output);
          
         }
         else {
           this.empty = true;
           this.loading = false;
         }
      })

  }
  
  populateComments(verbatimData){ 
    this.otherComments = [];
    for(let i = 0; i<verbatimData.length; i++){
      if(verbatimData[i].isPost==false){
        let comment ={
          comment_id: 0, created_time:"", content:"", contentLength: 0, platform_name: "", region:"", impact_area_id:"", topics:"", sentiment:0
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
        
        if(this.items.get(verbatimData[i].post_id)){
          let currentPost = this.items.get(verbatimData[i].post_id);
          currentPost.comments.push(comment);
          this.items.set(verbatimData[i].post_id, currentPost);
        }
        else this.otherComments.push(comment);
      }
    }
  }

  fetchPostFromResponse(verbatimData){
    for(let i = 0; i<verbatimData.length; i++){
      if(verbatimData[i].isPost==true){
        let post ={
          post_id: 0, comments:[], content: "", contentLength: 0, platform_name:"", created_time:"", region:"", impact_area_id:"", sentiment:0, topics:"" 
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
  ngOnInit(): void {
    this.isOn = true;
    this.subscription = combineLatest(this.data.share, this.data.locationshare, this.data.impactidshare).subscribe(([text, location, impactIds]) =>{
      if(this.changedObjtext!= text || this.changedObjLocation!=location[0] ){
        this.changedObjtext = text;
        this.impactIds = impactIds;
        this.changedObjLocation = location[0];
        this.dates = text.split(' to ');
        this.start = this.dates[0];
        this.end = this.dates[1];
          this.region = location[0].split(' - ')[0];
          this.parent_region = location[0].split(' - ')[1];
          this.createVerbatimView();
      }
  });
  }
  beforeChange($event: NgbPanelChangeEvent) {
    console.log($event.panelId);
    if ($event.panelId === 'panelOne') {
      $event.preventDefault();
    }
 
    if ($event.panelId === 'panelTwo' && $event.nextState === false) {
      $event.preventDefault();
    }
  }
  showText(e){
    var className =e.target.previousElementSibling;
    if(className.classList.contains('opened')){
      className.classList.remove('opened');
      e.target.innerText="Show More";
      className.classList.add('closed');
      this.show = false;
    }
    else if(className.classList.contains('closed')){
      className.classList.remove('closed');
      e.target.innerText = " Show Less";
      className.classList.add('opened');
      this.show = true;
    }
      
} 
}