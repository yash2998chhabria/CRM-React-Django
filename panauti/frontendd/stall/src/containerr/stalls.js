import React from 'react'
import { Button, Icon,Loader, Image, Item, Label ,Message} from 'semantic-ui-react'
import Axios from 'axios'
import StallDetailVieww  from './StallDetailView'



const paragraph = <Image src='/images/wireframe/short-paragraph.png' />

class sproduct extends React.Component {

    state={
        loading:false,
        data:[],
        error:null
    }

    componentDidMount(){
        this.setState({loading:true});
        
        Axios.get('http://127.0.0.1:8000/api/stall')
        .then(res=>{
            console.log(res.data)
            this.setState({data:res.data, loading:false})
            console.log(this.state.data)
            
        })
        .catch(err=> {
            this.setState({error:err,loading:false})
        })
    }
    render(){
        const {data,error,loading}=this.state;
        return(
          
        //     <div>
        //     {loading && (<Loader active inline='centered' ></Loader>)};
        //     {error && (<Message
        //     error
        //     header='There was some errors with your submission'
        //     content={JSON.stringify(error)}
        //     />)}
        //     </div>
        <Item.Group >
          <StallDetailVieww name={this.state.product_name}/>
        {data.map(item=>{
        // {item.product.map(prod => (<span>{prod.product_name} {prod.price}</span>))}
         return <Item>
            
          <Item.Image src={item.cover} />
    
          <Item.Content>
            <Item.Header as='a'>{item.name}</Item.Header>
            <Item.Meta>
              <span className='cinema'>Contact{item.contact_stall}</span>
            </Item.Meta>
            <Item.Description>Description:{item.description}</Item.Description>
            <Item.Extra>
              <Button primary floated='right'>
              {<a href={`stalls/${item.id}`}>{"VisitStall"}</a>}
                <Icon name='right chevron' />
              </Button>
              <Label>Limited</Label>
            </Item.Extra>
          </Item.Content>

        </Item>
    
    
      
      })}
      </Item.Group>

// {product.colors.map(color => (<span>{color.main} {color.secondary}</span>))}

    

)
    }
}

export default sproduct