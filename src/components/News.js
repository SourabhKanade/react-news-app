import React, { Component } from "react";
import { NewsItem } from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: { id: "ign", name: "IGN" },
      author: "Jared Moore",
      title:
        "Konami's eFootball 2022 Launches This Month, But It'll Be Extremely Limited - IGN",
      description:
        "eFootball 2020 will launch in extremely limited form this month – but a post-launch update this Fall should add a lot more to Konami's free-to-play game.",
      url: "https://www.ign.com/articles/efootball-release-date-september-fall-autumn-update-content",
      urlToImage:
        "https://assets-prd.ignimgs.com/2021/09/02/efootball-blog-1626780646453-1630588175564.jpg?width=1280",
      publishedAt: "2021-09-02T13:52:41Z",
      content:
        "Konami has revealed the release date for its upcoming free-to-play title, eFootball 2022. The company has announced that its replacement for the Pro Evolution Soccer series will launch on September 3… [+4215 chars]",
    },
    {
      source: { id: "fox-sports", name: "Fox Sports" },
      author: "FOX Sports",
      title:
        "2022 NFL Draft Big Board: Oregon DE Kayvon Thibodeaux tops the class",
      description:
        "Heading into Week 1 of the college football season, defense dominates Rob Rang's first look at next spring's first round.",
      url: "http://www.foxsports.com/stories/college-football/2022-nfl-draft-big-board-kayvon-thibodeaux-derek-stingley-kyle-hamilton-evan-neal-christian-harris",
      urlToImage:
        "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2021/09/1408/814/9.1.21_Rob-Rangs-Big-Board-16x9.jpg?ve=1&tl=1",
      publishedAt: "2021-09-02T12:32:54Z",
      content:
        "By Rob RangFOX Sports NFL Draft Analyst\r\nThe 2021 NFL Draft was loaded with skill-position talent including a rare collection of quarterbacks but expect the pendulum to swing back to the defense next… [+18807 chars]",
    },
    {
      source: { id: "abc-news-au", name: "ABC News (AU)" },
      author: "Patrick Martin",
      title:
        "APY Lands football grand final postponed after threats of violence made against staff, players and spectators",
      description:
        "Recent off-field violence in the country's most remote football league has culminated in threats being made against staff, players and spectators — forcing the SANFL to indefinitely postpone the grand final.",
      url: "http://www.abc.net.au/news/2021-09-02/sa-apy-lands-football-postponed-after-threats-of-violence/100430632",
      urlToImage:
        "https://live-production.wcms.abc-cdn.net.au/de4c9b690af5c7ec0e309896bb63c305?impolicy=wcms_crop_resize&cropH=676&cropW=1200&xPos=0&yPos=61&width=862&height=485",
      publishedAt: "2021-09-02T11:29:41Z",
      content:
        "Threats of match-day violence in Australia's most remote football league have seen its grand final postponed.\r\n<ul><li>SA Police advised the SANFL of threats made ahead of the APY League's grand fina… [+1684 chars]",
    },
    {
      source: { id: "usa-today", name: "USA Today" },
      author: null,
      title:
        "Before Bishop Sycamore, there was Christians of Faith Academy, along with lawsuits and unanswered questions",
      description:
        "Bishop Sycamore is facing scrutiny after its ugly loss in a nationally televised football game, but this is not new to many of the people involved.",
      url: "https://www.usatoday.com/story/sports/highschool/2021/09/02/bishop-sycamore-football-another-suspicious-high-school-christians-of-faith/5670371001/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2021/09/02/USAT/06ae17e2-a45e-4b25-a7fc-d3e1bbf70eb2-XXX_sd__2722.JPG?auto=webp&crop=2510,1412,x1,y96&format=pjpg&width=1200",
      publishedAt: "2021-09-02T11:00:34+00:00",
      content:
        "The craziest part of the Bishop Sycamore story isn't that a possibly fictitious school sprouted up in Columbus, Ohio, and started scheduling football games against a string of powerhouse programs aro… [+14676 chars]",
    },
    {
      source: { id: "abc-news-au", name: "ABC News (AU)" },
      author: "Elizabeth Byrne",
      title:
        "Former Ainslie Football Club coach Stephen Porter pleads guilty to child sex offences",
      description:
        "A former junior coach at a major Australian football club in Canberra pleads guilty to sexual offences against three boys, including one he allegedly abused during private coaching sessions.",
      url: "http://www.abc.net.au/news/2021-09-02/former-ainslie-football-club-coach-admits-child-sex-offences/100420840",
      urlToImage:
        "https://live-production.wcms.abc-cdn.net.au/6ca1b84a8ca16f2383e4dfb5da7cbe06?impolicy=wcms_crop_resize&cropH=2270&cropW=4036&xPos=0&yPos=544&width=862&height=485",
      publishedAt: "2021-09-02T08:54:24Z",
      content:
        "A junior football coach from a major Canberra club pleaded guilty in the ACT Supreme Court to sexual offences against three boys. \r\n<ul><li>Former Ainslie coach Stephen Porter pleads guilty to sexual… [+1444 chars]",
    },
    {
      source: { id: "talksport", name: "TalkSport" },
      author: "talkSPORT",
      title:
        "Transfer rumours and football news LIVE: Ronaldo ‘proves doubters wrong’ with Portugal heroics, Manchester...",
      description: "",
      url: "https://talksport.com/football/834837/transfer-deadline-day-news-live-gossip-deals-arsenal-tottenham-man-united-chelsea-leeds-ronaldo/",
      urlToImage:
        "https://talksport.com/wp-content/uploads/sites/5/2021/09/TALKSPORT-BLOG-COMP-1.jpg?strip=all&quality=100&w=1200&h=800&crop=1",
      publishedAt: "2021-09-02T06:39:57Z",
      content:
        "The international break is upon us and Cristiano Ronaldo stole the show on Wednesday night. \r\nFresh off the back of his Manchester United return on Deadline Day, the Portugal icon broke the internati… [+381 chars]",
    },
    {
      source: { id: "fox-sports", name: "Fox Sports" },
      author: "FOX Sports",
      title:
        "Alabama, Oklahoma, Clemson, more: College football Week 1 by the numbers",
      description:
        "College football's first full weekend is filled with big-time matchups. Here are the numbers to know before kickoff.",
      url: "http://www.foxsports.com/stories/college-football/alabama-oklahoma-clemson-ohio-state-week-1-by-the-numbers-miami-notre-dame-georgia-florida-state-ucla",
      urlToImage:
        "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2021/09/1408/814/09.01.21_CFB-By-the-Numbers_16x9.jpg?ve=1&tl=1",
      publishedAt: "2021-09-02T02:19:32Z",
      content:
        "The college football season is officially here, and the first full weekend of action is filled with marquee programs and big-time matchups.\r\nSaturday's slate features four contests between ranked tea… [+6232 chars]",
    },
    {
      source: { id: "bbc-sport", name: "BBC Sport" },
      author: "BBC Sport",
      title: "Ronaldo breaks international goal record",
      description:
        "Cristiano Ronaldo breaks the world record for goals scored in men's international football with two headers against the Republic of Ireland.",
      url: "http://www.bbc.co.uk/sport/football/58412201",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/16355/production/_120356909_ronaldo.jpg",
      publishedAt: "2021-09-01T21:07:30.4189095Z",
      content:
        "Cristiano Ronaldo has scored 28 headers for Portugal, including his two against the Irish\r\nCristiano Ronaldo broke the world record for goals scored in men's international football as he hit his 110t… [+5023 chars]",
    },
    {
      source: { id: "fox-sports", name: "Fox Sports" },
      author: "FOX Sports",
      title: "College Football: Top newcomers in the Pac-12 Conference",
      description:
        "Zach Charbonnet kicked off his UCLA career with a bang. The Michigan transfer is one of several Pac-12 newcomers looking to make a splash.",
      url: "http://www.foxsports.com/stories/college-football/pac-12-top-newcomers-zach-charbonnet-ucla-korey-foreman-keaontay-ingram-usc",
      urlToImage:
        "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2021/09/1408/814/c2070853-9.1.21_Top-Newcomers-in-the-pac12_CFB-16x9-final-1.jpg?ve=1&tl=1",
      publishedAt: "2021-09-01T20:54:35Z",
      content:
        "By Sean MerrimanFOX Sports Senior Editor\r\nAlthough Week 0 of the 2021 college football season didnt feature a loaded slate of games, one individual performance certainly stood out above the rest. Yes… [+3820 chars]",
    },
    {
      source: { id: "fox-sports", name: "Fox Sports" },
      author: null,
      title:
        "College Football\n     \n        How To Bet Ohio State vs. Minnesota\n       \n        How To Bet Ohio State vs. Minnesota\n       \n        The Buckeyes are favored to win by two touchdowns, but Sammy P explains why the Golden Gophers are the right side Thursday night.\n       \n      13 mins ago",
      description:
        "The Buckeyes are favored to win by two touchdowns, but Sammy P explains why the Golden Gophers are the right side Thursday night.",
      url: "http://www.foxsports.com/stories/college-football/how-to-bet-ohio-state-minnesota-odds-picks-start-time-more",
      urlToImage:
        "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2021/09/1408/814/08.31.21_How-to-bet-Ohio-State-vs.-Minnesota_16x9_v3.jpg?ve=1&tl=1",
      publishedAt: "2021-09-01T20:52:24.8228615Z",
      content:
        "By Sam PanayotovichFOX Sports Betting Analyst\r\nBetting against the best college football programs is dangerous.\r\nYet as we inch closer to Thursday nights tilt between the fourth-ranked Ohio State Buc… [+3524 chars]",
    },
    {
      source: { id: "espn", name: "ESPN" },
      author: "ESPN Fantasy staff",
      title:
        "ESPN+ fantasy football cheat sheet - Draft tips, sleepers and busts",
      description:
        "Get all of our best fantasy intel, compiled on a printable cheat sheet to bring with you to your fantasy football drafts.",
      url: "http://espn.go.com/fantasy/football/insider/story/_/id/32004845/espn+-fantasy-football-cheat-sheet-draft-tips-sleepers-busts",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0804%2Fr891048_1296x729_16%2D9.jpg",
      publishedAt: "2021-08-11T21:23:10Z",
      content:
        "Few things are better than fantasy football season, but it can be tough to read every article we publish all summer. In order to help you prepare for your drafts as quickly as possible, we present yo… [+467 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
      description:
        "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
      urlToImage:
        "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
      publishedAt: "2020-04-27T07:20:43Z",
      content:
        "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]",
    },
  ];
  constructor() {
    super();
    console.log("hello constructor");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h2>Ninja News - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="mytitle"
              description="mydesc"
              imageURL="https://live-production.wcms.abc-cdn.net.au/de4c9b690af5c7ec0e309896bb63c305?impolicy=wcms_crop_resize&cropH=676&cropW=1200&xPos=0&yPos=61&width=862&height=485"
            />
          </div>
          <div className="col-md-4">
            <NewsItem title="mytitle" description="mydesc" />
          </div>
          <div className="col-md-4">
            <NewsItem title="mytitle" description="mydesc" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
