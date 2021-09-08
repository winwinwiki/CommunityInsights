import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, ViewChild, ElementRef, VERSION, OnInit, OnDestroy } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';

import * as d3plus from './../d3plus';

import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

import PubSub from '@aws-amplify/pubsub';
import API from '@aws-amplify/api';

import awsmobile from '../../aws-exports';

Amplify.configure(awsmobile);
PubSub.configure(awsmobile)

import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';

import Amplify, { Auth } from 'aws-amplify';

import { DataTransferService } from '.././data-transfer.service';
import { Observable, Subscription, combineLatest } from 'rxjs';
import { Text } from '@angular/compiler/src/i18n/i18n_ast';
declare var $: any;
@Component({
  selector: 'app-tree-map',
  templateUrl: './tree-map.component.html',
  styleUrls: ['./tree-map.component.css']
})
export class TreeMapComponent implements OnInit {
 treemapdata : [];
 treemapdatasdg: any;
 treemapdataspi: any;
 treemapdatatsf: any;
 treemapdatanewimpact:any;
 impactTreeData = [];
  @ViewChild('test', {static: false}) test: ElementRef;

  filterChanged: (event: any) => void;
  load= true;
  empty = false;
  start = String;
  end= String;
  region = String;
  parent_region = String;

  text='';
  dates=[];
  regiondata=[];
  finalDates= [];
  error: any;
  hierarchy = [];
  impactTypes =[];
  depthOption : number = 2;
  subscription: Subscription;
  constructor(private apollo: Apollo, private data: DataTransferService,) { }

  public filterTypes=[];

  
  buildTreemap() {
    this.filterTypes = [
      { value: 0 },
      { value: 1 },
      { value: 2},
      { value: 3}
    ];
    this.treemapdata =[];
    this.apollo
      .query<any>({
        query: gql`
          query treemapMaster($start: String!, $end: String!, $region: String!, $parent : String!) {
            treemapMaster(start: $start, end: $end, region: $region, parent: $parent){
             impact_area_id
             value
            }
          }
        `,
          variables: {
            start: this.start,
            end: this.end,
            region: this.region,
            parent: this.parent_region
          }
      })
      .subscribe(
        ({ data, loading }) => {
          this.treemapdata = data && data.treemapMaster;
          this.load = false;
          $('#treemap').find('svg').remove();
          if(this.treemapdata.length != 0){
            this.empty = false;
            //this.impactTypes = [...new Set(data.listImpactTree.map(item => item.source_ontology))];
            this.impactTypes = ['NewImpact', 'SDG', 'SPI', 'Scorecard for Prosperity - Civic Commons'];
          //  this.impactTypes.splice(0, 0,'NewImpact');
            this.treeFramework(this.treemapdata);
      
          }
          else this.empty = true;
        },error => {
          this.load = false;
          this.error = error;
          console.log("error is: ", error);
        }
      )
  }

  ngOnInit(): void {

    this.subscription = combineLatest(this.data.share, this.data.locationshare).subscribe(([text, location]) =>{
      this.dates = text.split(' to ');
      this.start = this.dates[0];
      this.end = this.dates[1];
      this.regiondata = (location[0]+"").split(' - ');
        this.region = this.regiondata[0];
        this.parent_region = this.regiondata[1];
        this.buildTreemap();
    });
  }
  mappingData(impactAreaIds, frameworkQueries){
    this.impactTreeData = [];

    impactAreaIds.forEach(x => {
      for(var i = 0; i<frameworkQueries.length; i++){
        if(x.impact_area_id === frameworkQueries[i].impact_area_id){
          this.impactTreeData.push(Object.assign({}, x, frameworkQueries[i]));
        } 
        }
    });

    return this.impactTreeData;
  }

  treeFramework(impactAreaIds) {
    //will call query for populating NewImpact Framework Treemap data
    this.apollo
      .query<any>({
        query: gql`
          query listImpactTree {
            listImpactTree{
              impact_area_id
              source_ontology
              tag
              level0
              level1
              level2
              color
            }
          }
        `
      })
      .subscribe(
        ({ data, loading }) => {
          this.treemapdatanewimpact = data && data.listImpactTree;
          this.updateImpactIds(this.treemapdatanewimpact);
          var ni= this.mappingData(impactAreaIds, this.treemapdatanewimpact);
          $('#treemap').find('svg').remove();
            this.empty = false;
            this.hierarchy = ["level0", "level1", "level2", "tag"];
            this.depthOption = 2;
            setTimeout(() => this.makevisualization(ni, 2, "NI"), 0);
        },error => {
          this.error = error;
          console.log("error is: ", error);
        }
      )
  }

  updateImpactIds(ids) {
    this.data.updateImpactIds(ids);
  }

  filterImpactArea(event) {
    if(event === 'NewImpact'){
      $('#treemap').find('svg').remove();
      this.filterTypes = [
        { value: 0 },
        { value: 1 },
        { value: 2},
        { value: 3}
      ];
      this.buildTreemap();
    }
    else {
      this.filterX (event);
    }
  }

  filterX (event) {
    if (event === 'SDG'){
      this.filterTypes = [
        { value: 0 },
        { value: 1 }
      ];
      this.apollo
      .query<any>({
        query: gql`
          query ListImpactSDG{
            listImpactSGD{
              impact_area_id
              source_ontology
              tag
              level0
              color
            }
          }
        `
      })
      .subscribe(
        ({ data, loading }) => {
          this.treemapdatasdg = data && data.listImpactSGD;
          var ni= this.mappingData(this.treemapdata, this.treemapdatasdg);
          $('#treemap').find('svg').remove();
            this.empty = false;
            this.hierarchy = ["level0", "tag"];
            this.depthOption = 0;
            setTimeout(() => this.makevisualization(ni, 0, "SDG"), 0);
        },error => {
          this.error = error;
          console.log("error is: ", error);
        }
      )


    }
    else if(event==='SPI'){
      this.filterTypes = [
        { value: 0 },
        { value: 1 },
        { value: 2 }
      ];
      this.apollo
      .query<any>({
        query: gql`
          query listImpactSPI{
            listImpactSPI{
              impact_area_id
              source_ontology
              tag
              level1
              level0
              color
            }
          }
         `
      })
      .subscribe(
        ({ data, loading }) => {
          this.treemapdataspi = data && data.listImpactSPI;
          var ni= this.mappingData(this.treemapdata, this.treemapdataspi);
          $('#treemap').find('svg').remove();
            this.empty = false;
            this.hierarchy = ["level0", "level1","tag"];
            this.depthOption = 1;
            setTimeout(() => this.makevisualization(ni, 1, "SPI"), 0);
        },error => {
          this.load = false;
          this.error = error;
          console.log("error is: ", error);
        }
      )

    }
    else if(event=== 'TSF'){
      this.filterTypes = [
        { value: 0 },
        { value: 1 },
        { value: 2 }
      ];
      this.apollo
      .query<any>({
        query: gql`
          query listImpactTSF{
            listImpactTSF{
              impact_area_id
              source_ontology
              tag
              level1
              level0
              color  
            }
          }
        `
      })
      .subscribe(
        ({ data, loading }) => {
          this.treemapdatatsf = data && data.listImpactTSF;
          this.load = false;

          var ni= this.mappingData(this.treemapdata, this.treemapdatatsf);
          $('#treemap').find('svg').remove();
            this.empty = false;
            this.hierarchy = ["level0", "level1","tag"];
            this.depthOption = 1;
            setTimeout(() => this.makevisualization(ni, 1, "TSF"), 0);
        },error => {
          this.load = false;
          this.error = error;
          console.log("error is: ", error);
        }
      )
    }
  }

  makevisualization (visualizationData, depthOption, type) {
    depthOption = parseInt(depthOption);
    var element =  document.getElementById('treemap');
    if (element)
    {
      element.innerHTML = '';
    
    var width= document.getElementById('treemap')!=null ? document.getElementById('treemap').getBoundingClientRect().width: '';
    var visualization = new d3plus.Treemap()
        .data(visualizationData)
        .select("#treemap")
        .groupBy(this.hierarchy)
        .depth(depthOption)
        .legend(false)
        .height(350)
        .width(width)
        .shapeConfig({
          fill: function(d) {
            return d.color;
          }
        });
        setTimeout(() => visualization.render(), 10);

        if(depthOption==2 && type ==='NI'){
          visualization.shapeConfig({
            label: function (d) {
              var table = d.level1 + " - " + d.level2 ;
              return table;
            },
            share:"true"
          });
          setTimeout(() => visualization.render(), 20);
        }
        this.filterChanged = function (event) {
         
          depthOption = parseInt(event);
          if(depthOption === 2 && type==='NI') {
            visualization.shapeConfig({
              label: function (d) {
                var table = d.level1 + " - " + d.level2;
                return table;
              },
            })
            .depth(depthOption)
            .render();
          }
          else {
            $('#treemap').find('svg').remove();
            visualization = new d3plus.Treemap()
            .data(visualizationData)
            .select("#treemap")
            .groupBy(this.hierarchy)
            .depth(depthOption)
            .legend(false)
            .height(350)
            .width(width)
            .shapeConfig({
              fill: function(d) {
                return d.color;
              }
            })
            .render();
          }
        }
      }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
