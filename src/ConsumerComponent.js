import SegmentedControlTab from 'react-native-segmented-control-tab'
import React, { Component } from 'react';
class ConsumerComponent extends Component {

    constructor(){
      super()
      this.state = {
        selectedIndex: 0,
      };
    }

    handleIndexChange = (index) => {
      this.setState({
        ...this.state,
        selectedIndex: index,
      });
    }

    render() {
        return (
            <View>
                <SegmentedControlTab
                    values={['First', 'Second', 'Third']}
                    selectedIndex={this.state.selectedIndex}
                    onTabPress={this.handleIndexChange}
                    />
            </View>
        );
    }
}