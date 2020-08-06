import React, { Component } from 'react';
 


class Dishdetail extends Component {

    constructor(props) {
        super(props);


    }





    render() {
       /* const dishdetail = this.props.dishes.map((dish) => {
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        });
*/      console.log(this.props.dishdetails);
        return {
        
            }   
    }
}

 

export default Dishdetail;