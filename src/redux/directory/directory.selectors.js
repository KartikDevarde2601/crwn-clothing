import {createSelector} from 'reselect';

const selectDirectory = state => state.directory;

export const selectDirectorySelectors = createSelector(
    [selectDirectory],
    directory => directory.sections
)