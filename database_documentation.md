
# Description of Database
The database that the tool uses is operated with MySQL (version 5.6.10), hosted on Amazon Web Services, and connected to the tool with GraphQL and Amplify. 

## Tables

The database contains the following tables:

### Discourse 
This is the most important table in the database. It stores posts/comments from social media and other sources, referred to here as "discourses". The table also assigns a unique identification number to each discourse, and along with other data referring to these discourses. 
| column name  |variable type   |description |
|--|--|--|
| discourse_id      | int(11), primary key    | a unique integer that represents each row in the Discourse table. For the purpose of making the upload easy, this column is set to auto-increment. |
| content           | text         |what the post/comment says|
| source_id         | int(11), foreign key corresponding to Source table      |  the source_id of the corresponding row in the Source table, describes where we got the discourse from|
| region            | varchar(255), foreign key corresponding to Regions table | a string that indicates the geographical origin of the discourse (for example, ‘King County’)|
| country_code      | varchar(3)   | A 3-character code representing the country that this Discourse corresponds to (for example, "USA")|
| created_time      | date         | Created_time: The day the discourse was published on its corresponding platform (for example, the day a tweet was posted)|
| imported_time     | date         | The day that the discourse was imported to the database|
| secondary_content | text         | Currently depreciated|
| isPost            | tinyint(1)   | 0 if the discourse is a comment (i.e. it is a reply to another discourse, like a comment on a Reddit thread or a tweet that response to another, and 0 otherwise|
| post_id           | int(11)      | The corresponding post this discourse is replying to (NULL if there is none)|
| ori_id            | varchar(255) | The id with which it this discourse identified on its corresponding platform|
| url               | text         | The web link where this discourse can be seen|

### Regions

Lists all of the Regions for which discourses have been/are being/will be collected.
| column name  |variable type   |description |
|--|--|--|
| region        | varchar(255), primary key | The name of the Region (for example, "King County")|
| parent_region | varchar(255) | The larger region within which the one in the "region" field is located (for example, "Washington" for King County). Can be NULL, which is usually the case for country-level regions. Whatever regions are named in this field must have their own rows in this table. |
| level         | int(11)      | The "level" of a region refers to how high in the region hierarchy it is, starting at 1 and always being 1 higher than its parent region (For example, the USA, which in this example has no region, is level 1, Washington state is level 2, King County is level 3, and so on). The tool has support for Regions with levels from 1 to 5.|
| is_active     | tinyint(1)   | A boolean value indicating whether the Region is currently in-use and should thus be included as a filtering option in the frontend.|

### Platform
This table lists all of the platforms from which Discourses were obtained.
| column name  |variable type   |description |
|--|--|--|
| platform_name | varchar(255), primary key | The name of the platform (for example, "Twitter"|
| platform_type | varchar(255) | A string describing what type of platform it is (for example, "community survey", or "social media")|

### Source
This table lists all of the various sources of data from which Discourses were obtained. 
| column name  |variable type   |description |
|--|--|--|
| source_id     | int(11), primary key      |  A unique integer that represents each data source listed in the Source table. For the purpose of making the upload easy, this column is set to auto-increment.|
| source_desc   | varchar(255) | The descriptive name for the source (for example, "u/kcmetrobus", i.e. the @kcmetrobus account on Twitter). |
| is_survey     | tinyint(1)   | A boolean that describes whether the source is a survey or not (0 if no, 1 if yes). In general, if a Source has this set to 1, then the discourses corresponding to this Source should consist of questions (which would have an isPost value of 1) and answers (which would hav an isPost value of 0)|
| region        | varchar(255), foreign key corresponding to Regions table | The name of the region to which this Source corresponds (for example, "King County") |
| platform_name | varchar(255), foreign key to Platform table | The name of the Platform to which this Source corresponds (for example, "Twitter")|
| share_parent  | tinyint(1)   | A boolean value that describes whether Discourses with this source should be considered to correspond to this source's region's parent regions as well (1 if that is the case, 0 otherwise)|
| share_child   | tinyint(1)   | A boolean value that describes whether Discourses with this source should be considered to correspond to this source's region's child regions as well (1 if that is the case, 0 otherwise)|
| scrape        | tinyint(1)   | A boolean value that describes whether data for this Source should be collected during automated scrapes (1 if that is the case, 0 otherwise)|

### ModelVersion 
This table lists all of the various machine learning models employed in assessing the various attributes of the Discourses listed in several of the secondary tables.
| column name  |variable type   |description |
|--|--|--|
| model_id     | int(11), primary key| A unique integer that represents each machine learning model listed in the ModelVersion table |
| model_task   | varchar(255)        | The purpose of this model |
| created_time | date                | The date in which this model was created|


### DiscourseHashtags

This table stores the hashtags that correspond to each discourse. This table will have more than one row for discourses that have more than one hashtag. 
| column name  |variable type   |description |
|--|--|--|
| discourse_id | int(11) , foreign key corresponding to the Discourse table     | The discourse_id of the Discourse that contains this hashtag|
| hashtag      | varchar(255) | a hashtag included in the discourse for this row  |

### DiscourseSentiment

This table assesses the sentiment of each discourse (i.e. if it is considered to express positive,neutral , or negative thoughts). It stores the probability that the discourse is each type in the _prob columns, and then stores the sentiment that it is most likely to be in the sentiment column, in integer form (1 if it is positive. 0 if it is neutral, -1 if it is negative).
| column name  |variable type   |description |
|--|--|--|
| discourse_id  | int(11) , foreign key corresponding to the Discourse table | The discourse_id of the Discourse that each row stores information for|
| sentiment     | int(11) | The sentiment that the discourse most likley expresses (1 if it is positive. 0 if it is neutral, -1 if it is negative).|
| positive_prob | float   | The probability that this discourse expresses positive thoughts|
| netural_prob  | float   | THe probability that this discourse expresses neutral thoughts|
| negative_prob | float   | The probability that this discourse expresses negative thoughts|
| model_id      | int(11), foreign key to the ModelVersion table | The model that assessed this discourse's sentiment|
 
### DiscourseType
Categorizes each discourse into one of five "types" of comments: "comment", "question", "proposal", "suggestion", or "paraphrase". 

 | column name  |variable type   |description |
|--|--|--|
| discourse_id | int(11), foreign key corresponding to the Discourse table     | The discourse_id of the Discourse that each row stores information for|
| type         | varchar(255) | Stores the name of the category that has been assigned to this discourse. |
| confidence   | float        | Stores a decimal that describes the certainty with which the AI model has categorized the discourse. |
| model_id     | int(11), foreign key to the ModelVersion table  | The ID of the model (in the ModelVersion table) that assigned the typing of this discourse. |

### TrendingTopics
A list of topics that have been identified (through machine learning) as relevant points of discussion for a specific date. The topics consist of words (or groups of words) that appear in several Discourses from that particular date.

 | column name  |variable type   |description |
|--|--|--|
| topic        | varchar(255) | The name of the topic, with a length between 1 and 3 words|
| counts       | int(11)      | The number of Discourses with which the machine learning model associated this topic with|
| n_gram       | int(11)      | The number of words in the topic (ranges from 1 to 3)|
| created_time | date         | The date for which this topic was identified|

### DiscourseTopicGraph
This table lists the topics associated with each discourse, identified by looking at the content and created_date of the Discourse and seeing if the content contains that topic and matches the date. The number of rows per Discourse matches the amount of topics identified within that Discourse
 | column name  |variable type   |description |
|--|--|--|
| discourse_id | int(11), foreign key corresponding to the Discourse table| The discourse_id of the Discourse that contains this topic|
| topic        | varchar(255) | The name of the topic|

### ImpactArea
A list of Impact Areas, or areas of focus/potential development, as listed by several different ontologies. This table contains Impact Areas from the SDG, SPI, and Seattle Foundation (TSF) ontologies. All of the impact areas listed here are part of NewImpact's ontology as well. 
 | column name  |variable type   |description |
|--|--|--|
| impact_area_id   | int(11), primary key      | A unique integer that represents each impact area listed in the ImpactArea table| 
| tag              | varchar(255) | The label/name of each impact area|
| source_parent_id | int(11)      | The parent area of this impact area, within its original ontology (i.e. its source ontology)|
| impact_parent_id | int(11)      | The parent area of this impact area, within NewImpact's ontology|
| source_ontology  | varchar(255) | The original ontology of this impact area (SDG, SPI, or TSF) | 

### DiscourseImpactArea
This table lists all of the impact areas with which each Discourse is associated (identified through machine learning)
 | column name  |variable type   |description |
|--|--|--|
| discourse_id   | int(11), foreign key corresponding to the Discourse table | The discourse_id of the Discourse that is related to this impact area|
| impact_area_id | int(11), foreign key corresponding to the ImpactArea table | One of the ImpactAreas to which this Discourse is related|
| model_id       | int(11), foreign key corresponding to the ModelVersion table | The ID of the model (in the ModelVersion table) that assigned the typing of this discourse. |

## Views
The database also uses several views, all of which are meant to simplify the queries that the frontend uses and make them easier to write/update as necessary. It contains the following Views:

### ImpactTree
This view helps display the full impact area hierarchy, as identified specifically by the NewImpact framework. It has one row for all of the highest level areas (i.e. the most specific ones, which do not serve as parents to other impact areas) and its parent areas, all on the same line. 

`CREATE VIEW ImpactTree as
select a.impact_area_id as impact_area_id, 
a.source_ontology,
a.tag AS tag, 
map1.tag AS level2,
map2.tag AS level1, 
map3.tag AS level0 
from ImpactArea a 
join ImpactArea map1 
join ImpactArea map2 
join ImpactArea map3 
where a.impact_parent_id = map1.impact_area_id
and (floor((a.impact_parent_id / 100)) * 100) = map2.impact_area_id 
and (floor((a.impact_parent_id / 10000)) * 10000) = map3.impact_area_id 
and a.impact_area_id < 500;`

### SDGTree
This view helps display the full impact area hierarchy, as identified specifically by the SDG framework. It has one row for all of the highest level areas (i.e. the most specific ones, which do not serve as parents to other impact areas) and its parent areas, all on the same line. 

`CREATE VIEW SDGTree as 
SELECT d.discourse_id AS discourse_id,
d.region AS region,
r.parent_region AS parent_region,
d.created_time AS created_time,
child.tag AS level1,
parent.tag AS level0,
child.impact_area_id AS IDlevel1,
parent.impact_area_id AS IDlevel0 
FROM Discourse d join DiscourseImpactArea dia on d.discourse_id = dia.discourse_id
join ImpactArea child on dia.impact_area_id = child.impact_area_id
join ImpactArea parent on child.source_parent_id = parent.impact_area_id
join Regions r on d.region = r.region
WHERE child.source_ontology = 'SDG';`

### SPITree
This view helps display the full impact area hierarchy, as identified specifically by the NewImpact framework. It has one row for all of the highest level areas (i.e. the most specific ones, which do not serve as parents to other impact areas) and its parent areas, all on the same line. 

`CREATE VIEW SPITree as 
select d.discourse_id AS discourse_id,
d.region AS region,
r.parent_region AS parent_region,
d.created_time AS created_time,
child.tag AS level2,
intermediate.tag AS level1,
parent.tag AS level0,
child.impact_area_id AS IDlevel2,
intermediate.impact_area_id AS IDlevel1,
parent.impact_area_id AS IDlevel0 
FROM Discourse d
join DiscourseImpactArea dia on d.discourse_id = dia.discourse_id
join ImpactArea child on dia.impact_area_id = child.impact_area_id
join ImpactArea intermediate on child.source_parent_id = intermediate.impact_area_id
join ImpactArea parent on intermediate.source_parent_id = parent.impact_area_id
join Regions r on d.region = r.region
WHERE child.source_ontology = 'SPI';`

### TSFTree
This view helps display the full impact area hierarchy, as identified specifically by the Seattle Foundation's framework. It has one row for all of the highest level areas (i.e. the most specific ones, which do not serve as parents to other impact areas) and its parent areas, all on the same line. 

`CREATE VIEW TSFTree as 
SELECT d.discourse_id AS discourse_id,
d.region AS region,
r.parent_region AS parent_region,
d.created_time AS created_time,
child.tag AS level2,
intermediate.tag AS level1,
parent.tag AS level0,
child.impact_area_id AS IDlevel2,
intermediate.impact_area_id AS IDlevel1,
parent.impact_area_id AS IDlevel0 
FROM Discourse d 
join DiscourseImpactArea dia on d.discourse_id = dia.discourse_id
join ImpactArea child on dia.impact_area_id = child.impact_area_id
join ImpactArea intermediate on child.source_parent_id = intermediate.impact_area_id
join ImpactArea parent on intermediate.source_parent_id = parent.impact_area_id
join Regions r on d.region = r.region 
WHERE child.source_ontology = 'TSF';`

### DiscourseTrendingTopics
This view works similarly to the DiscourseTopicGraph table, but with additional information on the Discourse added in as well, including its sentiment (from DiscourseSentiment), its region, and its date. 

`CREATE VIEW DiscourseTrendingTopics as
SELECT a.discourse_id AS discourse_id,
b.topic AS topic,
a.region AS region,
r.parent_region AS parent_region,
a.created_time AS created_time, 
c.sentiment AS sentiment 
FROM Discourse a 
join DiscourseTopicGraph b on a.discourse_id = b.discourse_id 
join DiscourseSentiment c on c.discourse_id = a.discourse_id
join Regions r on a.region = r.region;`


### HashtagMaster
This view works similarly to the DiscourseHashtag table, but with additional information on the Discourse added in as well, including its sentiment (from DiscourseSentiment), its region, and its date. 

`Create view HashtagMaster as
select a.discourse_id AS discourse_id,
a.hashtag AS hashtag,
b.region AS region,
r.parent_region AS parent_region, 
b.created_time AS created_date, 
c.sentiment AS sentiment 
from DiscourseHashtags a 
join Discourse b
join DiscourseSentiment c 
join Regions r
where a.discourse_id = b.discourse_id
and b.discourse_id = c.discourse_id
and r.region = b.region;`

### ImpactAreaMaster
This view works similarly to the DiscourseImpactArea table, but with additional information added in, such as all of the data on that impact area that can be found in the ImpactTree view, as well as additional data on the Discourse itself, including its sentiment (from DiscourseSentiment), its region, and its date. 

`CREATE VIEW ImpactAreaMaster as
SELECT x.discourse_id AS discourse_id,
a.region AS region, 
r.parent_region as parent_region, 
a.created_time AS date, 
b.sentiment AS sentiment,
z.tag AS tag,
z.source_ontology AS source_ontology,
z.level2 AS level2, 
z.level1 AS level1, 
z.level0 AS level0 
FROM Discourse a join DiscourseImpactArea x on x.discourse_id = a.discourse_id 
join ImpactTree z on x.impact_area_id = z.impact_area_id 
join DiscourseSentiment b on b.discourse_id = a.discourse_id 
join Regions r on r.region = a.region
group by discourse_id, sentiment, tag;`

### TreeMapMaster
This view is a simplified version of ImpactAreaMaster, pulling all of the same data,on the Discourse that each row refers to but dropping the data obtained on each impact area from the ImpactTree view. 

`CREATE VIEW TreeMapMaster AS
SELECT a.discourse_id AS discoruse_id,
a.created_time AS date,
a.region AS region,
r.parent_region AS parent_region,
i.impact_area_id AS impact_area_id 
FROM Discourse a 
join Regions r on a.region = r.region 
join DiscourseImpactArea i on a.discourse_id = i.discourse_id;`

### RegionLevels
This view is an expanded version of the Region table that includes all of the parents of the Region, not just its most immediate one, on each corresponding row. It is similar to the ImpactTree view and its variants, except that it also has individual rows for parent-level regions. 

`CREATE VIEW RegionLevels as
SELECT child.region AS region,
parent1.region AS parent1,
parent2.region AS parent2,
parent3.region AS parent3,
parent4.region AS parent4,
child.level AS level 
FROM Regions child 
left join Regions parent1 on child.parent_region = parent1.region
left join Regions parent2 on parent1.parent_region = parent2.region 
left join Regions parent3 on parent2.parent_region = parent3.region
left join Regions parent4 on parent3.parent_region = parent4.region 
ORDER BY child.level;`

### TrendingTopicsDateRanges
This view is a simplification of the TrendingTopics table, which can have duplicates of one single topic if it appears on multiple dates. This view instead has only one row per unqiue topic, and has two dates associated (the earliest and latest dates that rows with that topic have on the TrendingTopics table) which together represent the range of dates over which discussions on that topic took place. 

`CREATE VIEW TrendingTopicsDateRanges AS
SELECT topic, 
n_gram,
sum(counts) AS counts,
min(created_time) AS start_time,
max(created_time) AS end_time 
FROM TrendingTopics 
GROUP BY topic;`

# GraphQL queries
These are the SQL queries used with GraphQL to pull data from the database. Placeholder values are used in several cases, which GraphQl replaces with the values selected through the frontend.


### getDiscourse
{
 ` "version": "2018-05-29",`
 ` "statements":   ["SELECT * FROM Discourse WHERE discourse_id=$ctx.args.discourse_id"]`
}

*Used to pull specific discourses one at a time*
<br>

### listDiscourses
{
  `"version": "2018-05-29",`
  `"statements":   ["SELECT * FROM Discourse"]`
}

*Used to get all of the data from the discourse table*
<br>

### getImpactArea
  `"version": "2018-05-29",`
  `"statements":   ["SELECT * FROM ImpactArea WHERE impact_area_id=$ctx.args.impact_area_id"]`
}

*Used to pull specific impact areas one at a time*
<br>

### listImpactAreas
{
  `"version": "2018-05-29",`
 ` "statements":   ["SELECT * FROM ImpactArea"]`
}

*Used to get the entire list of impact areas*
<br>

### listImpactTree
{
   ` "version": "2018-05-29",`
 `   "statements": ["select tag, level0, level1, level2, source_ontology, count(*) as value, (CASE WHEN level0 ='Society' THEN '#2194c0' WHEN level0 = 'Industry' THEN '#ffc000' WHEN level0='Environment' THEN '#53a948' END) as color from ImpactAreaMaster where date between  '$ctx.args.start' and '$ctx.args.end' and region = '$ctx.args.region' and parent_region = '$ctx.args.parent' group by tag"]`
}

*Used to get a list the impact areas from the highest level of the NewImpact Hierarchy (along with its parent areas) and assign its color value for filling displays in the frontend*
<br>

### getModelVersion
{
`  "version": "2018-05-29",	`
` "statements":   ["SELECT * FROM ModelVersion WHERE model_id=$ctx.args.model_id"]`
}

*Used to get the data for a specific AI model from the ModelVersion table, which lists them*
<br>

### listModelVersions
{
  `"version": "2018-05-29",`
  `"statements":   ["SELECT * FROM ModelVersion"]`
}

*Used to get all of the data from the ModelVersion table, which lists all of the AI models used*
<br>

### getPlatform
{
  `"version": "2018-05-29",`
  `"statements":   ["SELECT * FROM Platform WHERE platform_id=$ctx.args.platform_id"]`
}

*Used to get the data for a specific platform from the Platform table, which lists all of the platforms from which data was obtained (Reddit, Twitter, a set of local surveys, etc.)*
<br>

### listPlatforms
{
  `"version": "2018-05-29",`
  `"statements":   ["SELECT * FROM Platform"]`
}

*Used to get all of the data from the Platform table, which lists all of the platforms from which data was obtained (Reddit, Twitter, a set of local surveys, etc.)*
<br>

### getSource
{
  `"version": "2018-05-29",`
  `"statements":   ["SELECT * FROM Source WHERE source_id=$ctx.args.source_id"]`
}

*Used to get the information from a specific source in the Source table, which lists the sources of data that the database has drawn from (ex. Mayor Jenny's Twitter account, an online goverrnment survey) *
<br>

### listSources
{
  `"version": "2018-05-29",`
  `"statements":   ["SELECT * FROM Source"]`
}

*Used to get all of the data in the Source table, which lists the sources of data that the database has drawn from (ex. Mayor Jenny's Twitter account, an online goverrnment survey) *
<br>

### listTrendingTopics
{
    `"version": "2018-05-29",`
    `"statements": ["SELECT * from TrendingTopics"]`
}

*Used to get all of the data in the TrendingTopics table, which lists the topics that trended within the data that was picked up for certai days.*
<br>

### listDiscourseHashtags
{
    `"version": "2018-05-29",`
    `"statements": [
        "SELECT hashtag, count(*) as counts from DiscourseHashtags group by hashtag order by counts desc limit 30"]`
}

*Gets the top 30 most frequently-appearing hashtags in the database (and their counts).*
<br>

### listTrendingHashtags
{
    `"version": "2018-05-29",`
    `"statements": [
        "select hashtag, count(*) as counts, sum(case when sentiment < 0 then 1 else 0 end) as negative,  sum(case when sentiment = 0 then 1 else 0 end) as neutral,  sum(case when sentiment > 0 then 1 else 0 end) as positive, min(created_date) as start_date from HashtagMaster where created_date between  '$ctx.args.start' and '$ctx.args.end' and region = '$ctx.args.region' and parent_region='$ctx.args.parent' group by hashtag order by counts desc limit 100" ]`
}

*Gets a list of the top 100 hashtags most frequently-appearing hashtags for a specific data range and in a specific region, along with the counts and the amount of tweets associated with using wach hashtag that expressed positive/negative/neutral sentiments.*
<br>

### listTrendingTopicsMaster
{
    `"version": "2018-05-29",`
    `"statements": [
        "select topic, count(*) as counts, sum(case when sentiment < 0 then 1 else 0 end) as negative,  sum(case when sentiment = 0 then 1 else 0 end) as neutral,  sum(case when sentiment > 0 then 1 else 0 end) as positive from DiscourseTrendingTopics where created_time between '$ctx.args.start' and '$ctx.args.end' and region='$ctx.args.region' and parent_region = '$ctx.args.parent' group by topic order by counts desc limit 100"]`
}

*Gets a list of the top 100 hashtags most frequently-appearing topics for a specific data range and in a specific region, along with the counts and the amount of tweets associated with using wach hashtag that expressed positive/negative/neutral sentiments*
<br>

### discourseTrendingTopics
{
    `"version": "2018-05-29",`
    `"statements": [
    	"select count(*) as counts, sentiment as sentiment,topic as topic, created_time as date from DiscourseTrendingTopics where created_time between '$ctx.args.start' and '$ctx.args.end' and topic ='$ctx.args.topic' and region='$ctx.args.region' and parent_region='$ctx.args.parent' group by created_time, sentiment order by created_time"]`
}

*Using the data in a specific region and within a specific date range, gets a list of topic-sentiment combinations, along with a count for each of these, which indicate the amount of discourses associated with that topic that express that type of sentiment.*
<br>

### hashtagMaster
{
    `"version": "2018-05-29",`
    `"statements": [
        "select count(*) as counts, sentiment as sentiment, hashtag as topic, created_date as date from HashtagMaster where created_date between '$ctx.args.start' and '$ctx.args.end' and hashtag ='$ctx.args.topic' and region='$ctx.args.region' and parent_region='$ctx.args.parent' group by created_date order by created_date"]`
}

*Using the data in a specific region and within a specific date range, gets a list of hashtag-sentiment combinations, along with a count for each of these, which indicate the amount of tweets associated with that hashtag that express that type of sentiment.*
<br>

### listDiscourseData
{
    `"version": "2018-05-29",`
    `"statements": [
        "select distinct d.discourse_id, d.region as region, d.content as comment, dtt.sentiment, GROUP_CONCAT(dtt.topic) as Topics, so.platform_name, d.created_time, i.source_ontology, d.isPost, d.post_id from Discourse d join Source so on d.source_id = so.source_id left join DiscourseImpactArea di on d.discourse_id = di.discourse_id left join ImpactArea i on di.impact_area_id = i.impact_area_id left join DiscourseTrendingTopics dtt on d.discourse_id = dtt.discourse_id where d.created_time between '$ctx.args.start' and '$ctx.args.end' and d.region='$ctx.args.region' group by d.discourse_id, i.source_ontology limit 500"]`
}

*This query pulls a list of most of the available data on each discourse, pulling all of the data for a set of discourses (within a specific date range and in a specific region) in the Discourse table, along with a list of topics that these discourses are associated with, the type of sentiment it demonstrates, and the impact areas they relate to.*
<br>

### getTopicsComment
{
    `"version": "2018-05-29",`
    `"statements": [
        "select topic from DiscourseTrendingTopics where discourse_id = '$ctx.args.discourse_id'"
    ]`
}

*Gets the list of topics associated with a particular discourse*
<br>

### listImpactSPI
{
    `"version": "2018-05-29",`
    `"statements": [
        "select count(*) as value, level0, level1, level2, (CASE WHEN level0 ='Basic Human Needs' THEN '#2194c0' WHEN level0 = 'Opportunity' THEN '#ffc000' WHEN level0='Foundations of Wellbeings' THEN '#53a948' END) as color from SPITree WHERE created_time between '$ctx.args.start' and '$ctx.args.end' and region = '$ctx.args.region' and parent_region = '$ctx.args.parent' group by level2"]`
}

*Lists all of the highest-level impact areas from the SPI ontology, along with  its parent areas and the amount of discourses associated with each, and a color value used in the frontend's displays.*
<br>

### listImpactTSF
{
   ` "version": "2018-05-29",`
   ` "statements": [
        "select count(*) as value, level0, level1, level2, (CASE WHEN level0 ='Inclusion' THEN '#2194c0' WHEN level0 = 'Growth' THEN '#ffc000' WHEN level0='Readiness' THEN '#53a948' END) as color from TSFTree WHERE created_time between '$ctx.args.start' and '$ctx.args.end' and region = '$ctx.args.region' and parent_region = '$ctx.args.parent' group by level2"]`
}

*Lists all of the highest-level impact areas from the Seattle Foundation's ontology, along with  its parent areas and the amount of discourses associated with each, and a color value used in the frontend's displays.*
<br>

### listImpactSGD
{
    `"version": "2018-05-29",`
    `"statements": [
        "select count(*) as value, level0, level1, (CASE WHEN level0 ='1 End Poverty' THEN '#E5243B' WHEN level0 = '2 End Hunger' THEN '#dda63a' WHEN level0='3 Good Health' THEN '#4c9f38' WHEN level0 ='4 Quality Education' THEN '#C5192D' WHEN level0 = '5 Gender Equality' THEN '#FF3A21' WHEN level0='6 Clean Water and Sanitation' THEN '#26BDE2' WHEN level0 ='7 Renewable Energy' THEN '#FCC30B' WHEN level0 = '8 Good Jobs and Econ Growth' THEN '#a21942' WHEN level0='9 Innovation and Infrastructure' THEN '#fd6925' WHEN level0 ='10 Reduced Inequalities' THEN '#dd1367' WHEN level0 = '11 Sustainable Cities and Communities' THEN '#fd9d24' WHEN level0='12 Sustainable Comsumption and Production' THEN '#BF8B2E' WHEN level0 ='13 Climate Action' THEN '#3f7e44' WHEN level0 = '14 Life Below Water' THEN '#0a97d9' WHEN level0='15 Life on Land' THEN '#56c02b' WHEN level0 = '16 Peace and Justice' THEN '#00689d' WHEN level0='17 Partnerships for the Goals' THEN '#19486a' END) as color from SDGTree WHERE created_time between '$ctx.args.start' and '$ctx.args.end' and region = '$ctx.args.region' and parent_region = '$ctx.args.parent' group by level1"]`
        }
		
*Lists all of the highest-level impact areas from the SDG ontology, along with  its parent areas and the amount of discourses associated with each, and a color value used in the frontend's displays.*
<br>

### location
{
   ` "version": "2018-05-29",`
    `"statements": [
       "select (case when level = 2 then concat(region) when level = 3 then concat(region, ' - ', parent1) when level = 4 then concat(parent1, ' - ', region,' - ', parent2) end) as location from RegionLevels order by level"
       ]`
}

*Pulls a formatted list of regions and their parents/children*
<br>

### impactFilter
{
    `"version": "2018-05-29",`
   ` "statements": [
        "Select count(*) as counts, NULL as tag, source_ontology from ImpactAreaMaster where date between '$ctx.args.start' and '$ctx.args.end' and region = '$ctx.args.region' and parent_region = '$ctx.args.parent' group by source_ontology UNION Select count(*), tag, source_ontology from ImpactAreaMaster where date between '$ctx.args.start' and '$ctx.args.end' and region = '$ctx.args.region' and parent_region = '$ctx.args.parent' group by source_ontology, tag"
    ]`
}

*Pulls a list of impact area ontologies and the highest-leveled tags of each of them, along with the count of discourses associated with them.*
