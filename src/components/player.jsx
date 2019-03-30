import React from 'react';

export class Player extends React.Component {
  render() {
    // `https://statdata.pgatour.com/players/${id}/career.json`
    // `https://statdata.pgatour.com/players/${id}/${year}results.json
    // `https://statdata.pgatour.com/historicalschedules/r/${year}/historicalschedule.json`
    // `https://statdata.pgatour.com/r/current/schedule-v2.json`
    // `https://statdata.pgatour.com/r/${tid}/field.json`
    // `https://statdata.pgatour.com/players/player.json`

    const { firstName, lastName, id } = this.props.player;
    return (
      <div>
        <div>{`Name: ${firstName} ${lastName}`}</div>
        <img
          alt='player-head-shot'
          src={`https://pga-tour-res.cloudinary.com/image/upload/b_rgb:cecece,c_fill,d_headshots_default.png,f_jpg,g_face:center,q_auto,w_400/headshots_${id}.png`}
        />
      </div>
    );
  }
}
