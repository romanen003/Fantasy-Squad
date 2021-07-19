import React, { useCallback, useEffect } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { Filters } from '../Filters';
import { addModelAction, requestModelListAction } from '../../../../app/myteam/actions';
import { ModelsListMyTeamSelector, selectedIdsModelsSelector } from '../../../../app/myteam/selectors';
import { Model } from '../Model';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ModelsSearcher = ({
  requestModelList, models, addModel, selectedIdsModels,
}) => {
  const { replace } = useHistory();
  const rarity = useQuery().get('rarity');
  const username = useQuery().get('username');

  useEffect(() => {
    requestModelList(rarity || 'all', username || '');
  }, [rarity, username]);

  const handleFilterChangeClick = useCallback((status) => {
    replace(rarity !== status ? `/my-team/?rarity=${status}` : '/my-team');
  }, [rarity, replace]);

  const handleSearchInputChange = useCallback((event) => {
    replace(`/my-team/?username=${event.target.value}`);
  }, [replace]);

  return (
    <div className="ModelsSearcher">
      <h2 className="ModelsSearcher__header">Get your team together</h2>
      <div className="ModelsSearcher__inputWrapper">
        <input
          value={username || ''}
          onChange={handleSearchInputChange}
          className="ModelsSearcher__input"
          type="text"
          placeholder="Start typing model name"
        />
      </div>
      <div className="ModelsSearcher__filters"><Filters onFilterChangeClick={handleFilterChangeClick} /></div>
      <div className="ModelsSearcher__result">
        <div className="ModelsSearcher_ResultMargins">
          {models.map((item) => (
            <div key={item.id} className="ModelsSearcher__wrapperModel">
              <Model
                selected={selectedIdsModels.includes(item.id)}
                disabledForSelecting={selectedIdsModels.length >= 5}
                item={item}
                onModelClick={addModel}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ModelsSearcherConnected = connect(
  (state) => ({
    models: ModelsListMyTeamSelector(state),
    selectedIdsModels: selectedIdsModelsSelector(state),
  }),
  {
    requestModelList: requestModelListAction,
    addModel: addModelAction,
  },
)(ModelsSearcher);
