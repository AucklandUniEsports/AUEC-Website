export default function EventCard(){
    return(
        <div className="content-block">
          <div className="event-card-top">
            <div>category tags</div>
            <div>eta</div>
          </div>
          <img className="event-card-thumbnail" src="webptest.webp" alt="" />
          <p className="event-card-info">date | <span>location</span></p>
          <p className="event-card-title">event name</p>
        </div>
    )
}