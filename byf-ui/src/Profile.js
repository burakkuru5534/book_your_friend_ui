import PostList from "./PostList";
import useFetch from "./useFetch";
import moment from 'moment'



const Profile = () => {

   const { data: posts, isPending, error } = useFetch('http://localhost:8080/usr/post')
   console.log(posts);
   let date = new Date();

   return (
      <div className="profile">
         {error && <div> {error} </div>}
         {isPending && <div>Loading...</div>}
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div id="content" class="content content-full-width">
                     <div class="profile">
                        <div class="profile-header">
                           <div class="profile-header-cover"></div>
                           <div class="profile-header-content">
                              <div class="profile-header-img">
                                 <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
                              </div>
                              <div class="profile-header-info">
                                 <h4 class="m-t-10 m-b-5">{localStorage.getItem("username")}</h4>
                                 <p class="m-b-10">UXUI + Frontend Developer</p>
                                 <a href="#" class="btn btn-sm btn-info mb-2">Edit Profile</a>
                              </div>
                           </div>
                           <ul class="profile-header-tab nav nav-tabs">
                              <li class="nav-item"><a href="http://localhost:3000/post/create" target="__blank" class="nav-link_">New Post</a></li>
                              <li class="nav-item"><a href="https://www.bootdey.com/snippets/view/bs4-profile-about" target="__blank" class="nav-link_">ABOUT</a></li>
                              <li class="nav-item"><a href="https://www.bootdey.com/snippets/view/profile-photos" target="__blank" class="nav-link_">PHOTOS</a></li>
                              <li class="nav-item"><a href="https://www.bootdey.com/snippets/view/profile-videos" target="__blank" class="nav-link_">VIDEOS</a></li>
                              <li class="nav-item"><a href="https://www.bootdey.com/snippets/view/bs4-profile-friend-list" target="__blank" class="nav-link_">FRIENDS</a></li>

                           </ul>
                        </div>
                     </div>
                     <div class="profile-content">
                        <div class="tab-content p-0">
                           {posts !== null && posts.map(post => (
                              <div class="tab-pane fade active show" id="profile-post" key={post.id}>
                                 <ul class="timeline">
                                    <li>
                                       <div class="timeline-time">
                                          <span class="date">{
                                             moment(post.zlins_dttm).format('MMMM Do YYYY, h:mm:ss a').toString()}</span>
                                          <span class="time">{moment(post.zlins_dttm).startOf('minute').fromNow()}</span>
                                       </div>
                                       <div class="timeline-icon">
                                          <a href="javascript:;">&nbsp;</a>
                                       </div>
                                       <div class="timeline-body">

                                          <div class="timeline-header">
                                             <span class="userimage"><img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" /></span>
                                             <span class="username"><a href="javascript:;">{localStorage.getItem("username")}</a> <small></small></span>
                                             <span class="pull-right text-muted">18 Views</span>
                                          </div>
                                          <div class="timeline-content">
                                             <h2>{post.title}</h2>
                                             {post.content}
                                             {post.tag !== null && post.tag.map(value => (
                                                <div className="react-tagsinput-tag" style={{marginLeft:"5px"}}>{value}</div>
                                             )
                                             )}
                                          </div>
                                          <div class="timeline-likes">
                                             <div class="stats-right">
                                                <span class="stats-text">259 Shares</span>
                                                <span class="stats-text">21 Comments</span>
                                             </div>
                                             <div class="stats">
                                                <span class="fa-stack fa-fw stats-icon">
                                                   <i class="fa fa-circle fa-stack-2x text-danger"></i>
                                                   <i class="fa fa-heart fa-stack-1x fa-inverse t-plus-1"></i>
                                                </span>
                                                <span class="fa-stack fa-fw stats-icon">
                                                   <i class="fa fa-circle fa-stack-2x text-primary"></i>
                                                   <i class="fa fa-thumbs-up fa-stack-1x fa-inverse"></i>
                                                </span>
                                                <span class="stats-total">4.3k</span>
                                             </div>
                                          </div>
                                          <div class="timeline-footer">
                                             <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like</a>
                                             <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment</a>
                                             <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-share fa-fw fa-lg m-r-3"></i> Share</a>
                                          </div>
                                          <div class="timeline-comment-box">
                                             <div class="user"><img src="https://bootdey.com/img/Content/avatar/avatar3.png" /></div>
                                             <div class="input">
                                                <form action="">
                                                   <div class="input-group">
                                                      <input type="text" class="form-control rounded-corner" placeholder="Write a comment..." />
                                                      <span class="input-group-btn p-l-10">
                                                         <button class="btn btn-primary f-s-12 rounded-corner" type="button">Comment</button>
                                                      </span>
                                                   </div>
                                                </form>
                                             </div>
                                          </div>
                                       </div>

                                    </li>
                                 </ul>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div >
   );

}

export default Profile;