import React, { Component } from 'react';
import './App.css';
import Box from './box';
import ijij from './ijij.jpg'
import CHIFFRES from './jojo.js'
import ROCK from './rock.js'
import popo from './popo.jpg'
import jojo from './jojo.jpg'
import hihi from './hihi.jpg'
//https://codesandbox.io/live/X69qpg

class App extends Component {
  render() {
    return (
      <div className="App">
       <h2>NOS programmes</h2>
       <div style={{display:"flex",border:"solid black 1px"}}>
        <Box color = "blue" name='full time' des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. "/>
        <Box color="red"name='part time' des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. "/>
        <Box color="grey" name='kids' des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. "/>
        <Box color="brown" name='summer' des="lLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. "/>
      </div>
      <div className="lopo">
      <h2 style={{color:"white"}}>QueLques chiffres</h2>
      <div style={{display:"flex",}} >
      <CHIFFRES number="+20,000" para="love"/>
      <CHIFFRES number="+500" para="eat"/>
      <CHIFFRES number="+300" para="play"/>
      <CHIFFRES number="+200"para="read"/>
      <CHIFFRES number="00000" para="smile"/>
      </div>
      </div>
        <div>
          <h2 style={{textAlign:"center"}}>Ou se passe les sessions?</h2>
          <p>les sessions se passe en tunis, LAC2 .je vous invite a visiter ce lieu.c est un milieu merveilleux ou se passe beacoup d activiter numerique aussi il y a des instrutucteurs profitionelle</p>
          <div style={{display:'flex'}}>
            <ROCK img={jojo} name="tunis" />
            <ROCK img={hihi} name="TOKYO"/>
            <ROCK img={popo} name="FRANCE"/>
          </div>
          </div>
     </div>
    );
  }
}

export default App;
