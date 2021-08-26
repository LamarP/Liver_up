import React from 'react';

class DrinkDetail extends React.Component{

  componentDidMount() {
  this.props.fetchDrink(this.props.match.params.drinkId)
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.drinkId !== this.props.match.params.drinkId) {
      this.props.fetchDrink(this.props.match.params.drinkId)
    }
  }

  render() {
    if (!this.props.drink) return null;
    return (
      <section className="drink-detail">
        <figure>
          <img src={this.props.drink.img_url} alt={this.props.drink.drink_name} />
        </figure>
        <ul>
          <li><h2>{this.props.drink.drink_name}</h2></li>
          <li>{this.props.drink.drink_style}</li>
          <li>{this.props.drink.base_spirit}</li>
          <li>{this.props.drink.abv}</li>
          <li>{this.props.drink.description}</li>
          <li>{this.props.drink.average_rating || 'No reviews yet'}</li>
        </ul>
      </section>
    )
  }
}

export default DrinkDetail;
    // const sessionId = this.props.sessionId;
    // const bar = this.props.bar;
    // const barId = parseInt(this.props.match.params.barId);
    // const checkIns = this.props.checkIns;
    // const checkIn_arr = Object.values(this.props.checkIns).filter(checkIn => checkIn.bar_id === barId);
    // const total = checkIn_arr.length ? checkIn_arr.length : 0;
    // const uniqueHash = {};
    // const youHash = {};
    // const userCheckIns = {}
    // console.log(this.props);
    // const uniqueCount = checkIn_arr.length ? checkIn_arr.forEach(checkin => {
    //   if (!uniqueHash[checkin.bar_id]) uniqueHash[checkin.bar_id] = 0;
    //   uniqueHash[checkin.bar_id]++;
    // }) : "";
    // const youCount = checkIn_arr.length ? checkIn_arr.forEach(checkin => {
    //   if (!youHash[checkin.author_id] && checkin.author_id === sessionId) youHash[checkin.author_id] = 0;
    //   youHash[checkin.author_id]++;
    // }) : "";
    // const unique = Object.keys(uniqueHash).length;
    // const you = Object.keys(youHash).length;
    // const checkIn_arr = Object.values(checkIns);
    // debugger
//       <div id="slide">
//         <div className="cont-bar-page">

//       <div className="main">

//       <div className="box-bar-page">

// <div className="content">

//     <div className="top">
          <div className="basic">
            <a className="label">
                <img className="bar-image" src={this.props.bar.img_url} alt={this.props.bar.name} width='30%' height="auto" />
            </a>
            <div className="name">
                    <h1>{this.props.bar.name}</h1>
                    <p className="bar-location">{this.props.bar.location}</p>
                    <p className="bar-type-show">{this.props.bar.style}</p>  
            </div>
          </div>
//           <div className="stats">
//             <p>
//               {/* <span className="stat">TOTAL</span>
//               <span className="count">4,204</span> */}
//               <span className="stat">TOTAL</span>
//               <span className="count" id="total">{total}</span>
                    
//             </p>
//             <p>
//               <span className="stat">UNIQUE</span>
//               <span className="count" id="unique">{unique}</span>
//             </p>
//             <p>
//               <span className="stat">MONTHLY</span>
//               <span className="count">24</span>
//             </p>
//             <p>
//               <span className="stat">YOU</span>
//               <span className="count" id="count">{you}</span>
//             </p>
//           </div>
//           <div className="details">
//                 <p className="abv">{this.props.bar.abv} ABV</p>
//                 <p className="ibu">12 ibu</p>
//                 {/* <p>{this.props.bar.average_rating || 'No reviews yet'}</p> */}
               
             
//                 <span className="num">(3.47)</span>
//                 <p className="ratings">2,788 Ratings </p>
//           </div>
//           <div className="bottom">
//                 <div className="actions">
//                       <div className="image-wrap">
//                         <img onClick={() => this.props.openModal({ modal: 'checkin', barId: barId})} className="check-image" src={window.check}alt="" />
//                         <p className="checkin-bar">Checkin this bar!!!</p>
//                       </div>

//             </div>
//             <div className="desc">
//               <p>
//                 {this.props.bar.description}
//               </p>
//             </div>
//             <div className="clear-fix"></div>
//           </div>
//       </div>
//     </div>
//           </div>
//           <div className="box-activity">
//             <div className="box-content">
//               <div className="filters">
//                 {/* <span>Sort by:</span>
//                 <span className="current">Global</span>
//                 <span><a>Friends</a></span>
//                 <span><a>You</a></span> */}
//               </div>
//                 <h3 className="global-recent-activity">Global Recent Activity</h3>
//               <div className="checkins">    <ul>
//           {
//              checkIn_arr.map((checkIn) => (
//             <CheckinIndexItem
//             key={`checkIn${checkIn.id}`}
//                  checkIn={checkIn}
//                  checkInId={checkIn.id}
//                  sessionId={this.props.sessionId}
//                  deleteCheckIn={this.props.deleteCheckIn}
//                  fetchUser={this.props.fetchUser ? this.props.fetchUser : ""}
//                  profileId={this.props.profileId ? this.props.profileId : ""}
//                />
//             ))
//           }
    
//                 </ul>
//                 </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>