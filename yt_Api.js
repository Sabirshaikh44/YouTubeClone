// API CODE:
let Api_Key = "AIzaSyCyfAEQt1LwMWqBohqAHlGn4sMGEYoqW_E";
// Requesting for videos,etc data:
let Channel_Request_Http = "https://www.googleapis.com/youtube/v3/channels?";
let Video_Request_Http = "https://www.googleapis.com/youtube/v3/videos?";

let ChannelRating_Request_Http =
  "https://www.googleapis.com/youtube/v3/videos/getRating?";

let fetching = fetch(
  Video_Request_Http +
    new URLSearchParams({
      key: Api_Key,
      part: "snippet,statistics",
      chart: "mostPopular",
      maxResults: 50,
      regionCode: "IN",
    })
)
  .then((res) => res.json())
  .then((data) => {
    data.items.forEach((item) => {
      ChannelIconfetch(item);
    });
  })
  .catch((err) => console.log(err));

let ChannelIconfetch = (video_data) => {
  fetch(
    Channel_Request_Http +
      new URLSearchParams({
        key: Api_Key,
        part:"snippet,statistics",
        id: video_data.snippet.channelId,
      })
  )
    .then((res) => res.json())
    .then((data) => {
      video_data.channelThumbnail = data.items[0].snippet.thumbnails.high.url;
      createVideoCard(video_data);
    });
  };

  // searching on basis of values:
  let searchbtn = document.querySelector(".searchbtn");
  let searchlink = "https://www.youtube.com/results?search_query=";

  searchbtn.addEventListener('click',()=>{
    if(searchbar.value.length){
      location.href = searchlink + searchbar.value;
    }
  })
  let createVideoCard = (data) => {
    let viewCount = data.statistics.viewCount;
    if(viewCount.length>=4 && viewCount.length<=6){
      formatedviewCount = Math.floor(viewCount/1000)+"k";
      viewCount.innerHTML = `${formatedviewCount}`;
      // return;
    }
    if(viewCount.length>=7){
      formatedviewCount = Math.floor(viewCount/1000000)+"M";
      viewCount.innerHTML = `${formatedviewCount}`;
      // return;
    }
    videoCardContainer.innerHTML += `
    
    <div class="video_render_cards" onclick="window.location.href='https://www.youtube.com/watch?v=${data.id}'">
    <img src="${data.snippet.thumbnails.high.url}" alt="">
    <p class="video_card_title_render">${data.snippet.title.substr(0,40)}</p>
    <div class="video_datas">
    <img src="${data.channelThumbnail}" alt="" class="channelThumbnail" id="channelThumbnail">
    <p class="channel_name_render">${data.snippet.channelTitle}</p>
    <span class="views_render_text">${formatedviewCount} | views </span>
    <span class="post_render_text">${data.snippet.publishedAt.substr(0,10)}</span>
    </div>
    </div>`;
  };
  
