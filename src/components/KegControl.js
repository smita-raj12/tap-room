import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';

class KegControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            mainKegList: [],
            selectedKeg: null,
            kegPint:0,
            kegPrice:0,
            editing: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
     
    handleChangingSelectedKeg = (id) => {
      const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
      this.setState({selectedKeg: selectedKeg});
    }
    handleEditClick = () => {
      console.log("handleEditClick reached!");
      this.setState({editing: true});
    }
    
    handleEditingKegInList = (kegToEdit) => {
      const editedMainKegList = this.state.mainKegList
        .filter(keg => keg.id !== this.state.selectedKeg.id)
        .concat(kegToEdit);
      this.setState({
          mainKegList: editedMainKegList,
          editing: false,
          selectedKeg: null
        });
    }

    handleDeletingKeg = (id) => {
      const newMainKegList = this.state.mainKegList.filter(keg => keg.id !== id);
      this.setState({
        mainKegList: newMainKegList,
        selectedKeg: null
      });
    }

    handleClick = () => {
      if (this.state.selectedKeg != null) {
        this.setState({
          formVisibleOnPage: false,
          selectedKeg: null,
          editing: false 
        });
        
      } else {
        this.setState(prevState => ({
          formVisibleOnPage: !prevState.formVisibleOnPage,
        }));
      }
    }
    
    handleClickingSell=()=> {
      let decrementingKegList = this.state.mainKegList;
      let kegPint = 0;
      let kegPrice = 0;
      decrementingKegList.map(q => {
          kegPint = q.pints--;
          kegPrice = q.price -- ;
      });
    this.setState({kegPint: kegPint,kegPrice: kegPrice});
    return;
  }

    handleAddingNewKegToList = (newKeg) => {
        const newMainKegList = this.state.mainKegList.concat(newKeg);
        this.setState({mainKegList: newMainKegList,
                    formVisibleOnPage: false });
    }

    render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
   
    if (this.state.editing ) {      
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} 
                                    onEditKeg = {this.handleEditingKegInList} />
      buttonText = "Return to Keg List";  

    }else if (this.state.selectedKeg != null) {
        currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} 
                                  onClickingSell = {this.handleClickingSell} 
                                  onClickingEdit = {this.handleEditClick} 
                                  onClickingDelete = {this.handleDeletingKeg}
                                  />
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