import React from 'react';
import NewTapForm from './NewTapForm';
import TapList from './TapList';

class TapControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            mainTapList: [],
            selectedTap: null
        };
        this.handleClick = this.handleClick.bind(this);
    }
     
     handleChangingSelectedTap = (id) => {
      const selectedTap = this.state.mainTapList.filter(Tap => Tap.id === id)[0];
      this.setState({selectedTap: selectedTap});
    }

    handleClick = () => {
      if (this.state.selectedTap != null) {
        this.setState({
          formVisibleOnPage: false,
          selectedTap: null
        });
      } else {
        this.setState(prevState => ({
          formVisibleOnPage: !prevState.formVisibleOnPage,
        }));
      }
    }
    
    handleAddingNewTapToList = (newTap) => {
        const newMainTapList = this.state.mainTapList.concat(newTap);
        this.setState({mainTapList: newMainTapList,
                    formVisibleOnPage: false });
    }

    render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
   
    if (this.state.selectedTap != null) {
        currentlyVisibleState = <TapDetail Tap = {this.state.selectedTap} />
        buttonText = "Return to Tap List";
    }
    else if (this.state.formVisibleOnPage) {
        currentlyVisibleState = <NewTapForm onNewTapCreation={this.handleAddingNewTapToList}  />;
        buttonText = "Return to Tap List";
    } else {
        currentlyVisibleState = <TapList TapList={this.state.mainTapList} onTapSelection={this.handleChangingSelectedTap} />;
        buttonText = "Add Tap";
    }
        return (
          <React.Fragment>
            {currentlyVisibleState}
            <button onClick={this.handleClick}>{buttonText}</button> 
          </React.Fragment>
        );
    }
}

export default TapControl;