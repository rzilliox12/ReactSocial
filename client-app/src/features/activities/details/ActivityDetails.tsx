import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';


export default function ActivityDetails(){

    const {activityStore} = useStore();
    const {selectedActivity: act, openForm, cancelSelectedActivity} = activityStore;

    if(!act){
        return <LoadingComponent></LoadingComponent>;
    }

    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${act.category}.jpg`}/>
            <Card.Content>
                <Card.Header>{act.title}</Card.Header>
                <Card.Meta>
                    <span>{act.date}</span>
                </Card.Meta>
                <Card.Description>
                    {act.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button onClick={() => openForm(act.id)} basic color='blue' content='Edit'></Button>
                    <Button onClick={cancelSelectedActivity} basic color='grey' content='Cancel'></Button>
                </Button.Group>
            </Card.Content>
        </Card>
    )
}