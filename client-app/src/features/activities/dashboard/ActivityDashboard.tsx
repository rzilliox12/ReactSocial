
import React, { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import ActivityList from './ActivityList';
import { observer } from 'mobx-react-lite';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import ActivityFilters from './ActivityFilters';


export default observer(function ActivityDasboard() {

    const {activityStore} = useStore();
    const {loadAcitivities, activityRegistry} = activityStore;

    useEffect(() => {
        if (activityRegistry.size <= 1) {
          loadAcitivities();
        }
      }, [activityRegistry.size, loadAcitivities])
    
      if(activityStore.loadingInitial) {
        return (
          <LoadingComponent content='Loading activities' />
        )
      }

    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList></ActivityList>
            </Grid.Column>
            <Grid.Column width='6'>
                <ActivityFilters />
            </Grid.Column>
        </Grid>
    )
})