import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';

class KegControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            mainKegList: [],
            selectedKeg: null
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
    
    handleAddingNewKegToList = (newKeg) => {
        const newMainKegList = this.state.mainKegList.concat(newKeg);
        this.setState({mainKegList: newMainKegList,
                    formVisibleOnPage: false });
    }

    render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
   
    if (this.state.selectedKeg != null) {
        currentlyVisibleState = <KegDetail Keg = {this.state.selectedKeg} />
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