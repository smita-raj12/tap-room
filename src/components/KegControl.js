import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';

class KegControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            mainKegList: [],
            selectedKeg: null,
            kegPint:0,
            kegPrice:0
        };
        this.handleClick = this.handleClick.bind(this);
    }
     
    handleChangingSelectedKeg = (id) => {
      const selectedKeg = this.state.mainKegList.filter(Keg => Keg.id === id)[0];
      this.setState({selectedKeg: selectedKeg});
    }

    handleClick = () => {
      if (this.state.selectedKeg != null) {
        this.setState({
          formVisibleOnPage: false,
          selectedKeg: null
        });
      } else {
        this.setState(prevState => ({
          formVisibleOnPage: !prevState.formVisibleOnPage,
        }));
      }
    }
    
    handleClickingSell =()=> {
      let incrementedKegList = this.state.mainKegList;
      let kegPint = 0;
      let kegPrice = 0;
      incrementedKegList.map(q => {
          kegPint = q.pints--;
          kegPrice = q.price--;
      });
    this.setState({kegPint: kegPint});
  }

    handleAddingNewKegToList = (newKeg) => {
        const newMainKegList = this.state.mainKegList.concat(newKeg);
        this.setState({mainKegList: newMainKegList,
                    formVisibleOnPage: false });
    }

    render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
   
    if (this.state.selectedKeg != null) {
        currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} onClickingSell = {this.handleClickingSell}/>
        buttonText = "Return to Keg List";
    }
    else if (this.state.formVisibleOnPage) {
        currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}  />;
        buttonText = "Return to Keg List";
    } else {
        currentlyVisibleState = <KegList KegList={this.state.mainKegList} onKegSelection={this.handleChangingSelectedKeg} />;
        buttonText = "Add Keg";
    }
        return (
          <React.Fragment>
            {currentlyVisibleState}
            <button onClick={this.handleClick}>{buttonText}</button> 
          </React.Fragment>
        );
    }
}

export default KegControl;