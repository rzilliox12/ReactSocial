import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';


export default observer(function ActivityDetails(){

    const {activityStore} = useStore();
    const {selectedActivity: act, loadActivity, loadingInitial} = activityStore;

    const {id} = useParams<{id: string}>();

    useEffect(() => {
        if (id) {
            loadActivity(id);
        }
    }, [id, loadActivity])

    if(loadingInitial || !act){
        return <LoadingComponent></LoadingComponent>;
    }

    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${act.category}.jpg`} alt={`${act.category} image`}/>
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
                    <Button as={Link} to={`/manage/${act.id}`} basic color='blue' content='Edit'></Button>
                    <Button as={Link} to='/activities' basic color='grey' content='Cancel'></Button>
                </Button.Group>
            </Card.Content>
        </Card>
    )
})