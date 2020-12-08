import { Component, OnInit, OnDestroy } from "@angular/core";
import { DataTransferService } from ".././data-transfer.service";
import { Observable, combineLatest } from "rxjs";

import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

import PubSub from "@aws-amplify/pubsub";
import API from "@aws-amplify/api";
import awsmobile from "../../aws-exports";
Amplify.configure(awsmobile);
PubSub.configure(awsmobile);
import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import Amplify, { Auth } from "aws-amplify";
import { pluck } from "rxjs/operators";

import * as d3plus2 from "./../d3plus.full";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.css"]
})
export class ChartComponent implements OnInit, OnDestroy {
  selectedData: any;
  searchValue: any;
  type: any;
  text = "";
  dates = [];
  start = String;
  end = String;
  empty = true;
  topicsChart = [];
  hashtagChart = [];
  location = "";
  regiondata = [];
  region: string;
  parent_region: string;
  subscription: any;
  changedObjtext = "";
  changedObjLocation = "";
  changeObjselectedData = "";
  changeObj;
  startTime: any;
  constructor(private data: DataTransferService, private apollo: Apollo) {}

  plotChart(chartData) {
    chartData.sort((a, b) => (a.date > b.date ? 1 : -1));
    if (document.getElementById("chart") != null) {
      document.getElementById("chart").innerHTML = "";
    }
    function legendtext(d) {
      if (d === -1) return "Negative";
      if (d === 0) return "Neutral";
      if (d === 1) return "Positive";
    }

    function assignColor(d) {
      if (d === -1) return "#676767";
      if (d === 0) return "#ffc000";
      if (d === 1) return "#2aa7d7";
      return "grey";
    }

    new d3plus2.LinePlot()
      .config({
        data: chartData,
        xSort: function(a, b) {
          return Date.parse(a["date"]) - Date.parse(b["date"]);
        },
        groupBy: "sentiment",
        x: "date",
        y: "counts",
        lineMarkers: true,
        lineMarkerConfig: {
          fill: function(d) {
            return assignColor(parseInt(d.group));
          }
        },
        legendConfig: {
          label: function(d) {
            return legendtext(d.sentiment);
          }
        },
        shapeConfig: {
          Line: {
            stroke: function(d) {
              return assignColor(d.sentiment);
            }
          }
        },
        xConfig: {
          title: "Date"
          // labels: []
        },
        yConfig: {
          title: "Count"
        },
        legendTooltip: {
          tbody: []
        },
        tooltipConfig: {
          title: function(d) {
            var a =
              d.sentiment === -1
                ? "Negative"
                : d.sentiment === 0
                ? "Neutral"
                : "Positive";
            return "Sentiment Count - " + d["counts"] + " " + a;
          },
          tbody: [
            [
              "Date: ",
              function(d) {
                return d["date"];
              }
            ]
          ]
        },
        timeline: "date",
        select: "#chart"
      })

      .render();
    console.log("Ended: " + (Date.now() - this.startTime));
    this.empty = false;
  }

  ngOnInit() {
    this.empty = true;

    this.subscription = combineLatest(
      this.data.share,
      this.data.locationshare,
      this.data.sharedData
    ).subscribe(([text, location, selectedData]) => {
      this.startTime = Date.now();
      console.log("started");
      if (
        this.changedObjtext != text ||
        this.changedObjLocation != location[0] ||
        this.changeObjselectedData != selectedData
      ) {
        this.changedObjtext = text;
        this.changedObjLocation = location[0];
        this.changeObjselectedData = selectedData;

        this.dates = text.split(" to ");
        this.start = this.dates[0];
        this.end = this.dates[1];

        this.regiondata = (location[0] + "").split(" - ");
        this.region = this.regiondata[0];
        this.parent_region = this.regiondata[1];

        this.searchValue = selectedData.substring(
          0,
          selectedData.lastIndexOf(" ")
        );
        // console.log("search value: "+this.searchValue)
        this.type = selectedData.substring(
          selectedData.lastIndexOf(" ") + 1,
          selectedData.length
        );
        // console.log(this.type)
        this.type === "topic" ? this.getTopicsChart() : this.getHashtagsChart();
      }
    });
  }

  getTopicsChart() {
    if (document.getElementById("chart") != null) {
      document.getElementById("chart").innerHTML = "";
    }
    this.apollo
      .query<any>({
        query: gql`
          query discourseTrendingTopics(
            $start: String!
            $end: String!
            $region: String!
            $parent: String!
            $topic: String!
          ) {
            discourseTrendingTopics(
              start: $start
              end: $end
              region: $region
              parent: $parent
              topic: $topic
            ) {
              counts
              sentiment
              topic
              date
            }
          }
        `,
        variables: {
          start: this.start,
          end: this.end,
          region: this.region,
          parent: this.parent_region,
          topic: this.searchValue
        }
      })
      .subscribe(
        ({ data, loading }) => {
          // console.log(this.searchValue)
          // console.log(data)
          console.log("Got data: " + (Date.now() - this.startTime));
          this.topicsChart = data && data.discourseTrendingTopics;
          document.getElementById("chart")
            ? this.plotChart(this.topicsChart)
            : "";
        },
        error => {
          console.log("error is: ", error);
        }
      );
  }

  getHashtagsChart() {
    if (document.getElementById("chart") != null) {
      document.getElementById("chart").innerHTML = "";
    }
    this.apollo
      .query<any>({
        query: gql`
          query hashtagMaster(
            $start: String!
            $end: String!
            $region: String!
            $parent: String!
            $topic: String!
          ) {
            hashtagMaster(
              start: $start
              end: $end
              region: $region
              parent: $parent
              topic: $topic
            ) {
              counts
              sentiment
              topic
              date
            }
          }
        `,
        variables: {
          start: this.start,
          end: this.end,
          region: this.region,
          parent: this.parent_region,
          topic: this.searchValue
        }
      })
      .subscribe(
        ({ data, loading }) => {
          console.log("Got data: " + (Date.now() - this.startTime));
          this.hashtagChart = data && data.hashtagMaster;
          document.getElementById("chart")
            ? this.plotChart(this.hashtagChart)
            : "";
        },
        error => {
          console.log("error is: ", error);
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
