import { useState } from 'react';
import {
  CheckboxInput,
  CheckboxLabel,
  Filter2,
  FilterWrapper,
  Options,
  SvgCheck,
  WrapperOpenOptions,
} from './Filter.styled';

import sprite from '@/shared/icons/sprite.svg';

import Button from '@/shared/components/Button/Button';

import { ageOptions, genderOptions } from '../../service/optionsService';
import { initialCheckboxesState } from '../../service/initialCheckboxesState';
import { CheckButton } from '../CheckButton/CheckButton';

export const FIlter = () => {
  const [isButtonsVisible, setButtonsVisible] = useState(false);
  const [checkboxes, setCheckboxes] = useState(initialCheckboxesState);

  const toggleButtons = () => {
    setButtonsVisible(!isButtonsVisible);
    setCheckboxes(prevState => ({
      ...prevState,
      showCheckboxByAge: false,
      showCheckboxByGender: false,
    }));
  };

  const showCheckboxDiv = checkboxName => {
    setCheckboxes(prevCheckboxes => ({
      ...prevCheckboxes,
      [checkboxName]: !prevCheckboxes[checkboxName],
    }));
  };

  const handleCheckboxChange = (group, name) => {
    setCheckboxes(prevCheckboxes => ({
      ...prevCheckboxes,
      [group]: {
        ...prevCheckboxes[group],
        [name]: !prevCheckboxes[group][name],
      },
    }));
  };

  return (
    <>
      <FilterWrapper>
        <Button
          onClick={toggleButtons}
          text="Filter"
          variant="filter"
          icon="filters-3"
          iconVariant="transparent"
          iconPosition="right"
          isButtonsVisible={isButtonsVisible}
        />
        {isButtonsVisible && (
          <Filter2>
            <WrapperOpenOptions>
              <Button
                onClick={() => showCheckboxDiv('showCheckboxByAge')}
                text="By age"
                variant="filterBySelect"
                icon={checkboxes.showCheckboxByAge ? 'chevron-up' : 'chevron-down'}
                iconVariant="transparent"
                iconPosition="left"
              />
              {checkboxes.showCheckboxByAge && (
                <Options>
                  {ageOptions.map(option => (
                    <CheckboxLabel key={option.value}>
                      <CheckboxInput
                        type="checkbox"
                        name="age"
                        value={option.value}
                        checked={checkboxes.ageOptions[option.value]}
                        onChange={() => handleCheckboxChange('ageOptions', option.value)}
                      />
                      {option.name}
                      {checkboxes.ageOptions[option.value] ? (
                        <SvgCheck width="24" height="24">
                          <use href={sprite + '#check-round'}></use>
                        </SvgCheck>
                      ) : (
                        <SvgCheck width="24" height="24">
                          <use href={sprite + '#round'}></use>
                        </SvgCheck>
                      )}
                    </CheckboxLabel>
                  ))}
                </Options>
              )}
            </WrapperOpenOptions>
            <WrapperOpenOptions>
              <Button
                onClick={() => showCheckboxDiv('showCheckboxByGender')}
                text="By Gender"
                variant="filterBySelect"
                icon={checkboxes.showCheckboxByGender ? 'chevron-up' : 'chevron-down'}
                iconVariant="transparent"
                iconPosition="left"
              />
              {checkboxes.showCheckboxByGender && (
                <Options>
                  {genderOptions.map(option => (
                    <CheckboxLabel key={option.value}>
                      <CheckboxInput
                        type="checkbox"
                        name="gender"
                        value={option.value}
                        checked={checkboxes.genderOptions[option.value]}
                        onChange={() => handleCheckboxChange('genderOptions', option.value)}
                      />
                      {option.name}
                      {checkboxes.genderOptions[option.value] ? (
                        <SvgCheck width="24" height="24">
                          <use href={sprite + '#check-round'}></use>
                        </SvgCheck>
                      ) : (
                        <SvgCheck width="24" height="24">
                          <use href={sprite + '#round'}></use>
                        </SvgCheck>
                      )}
                    </CheckboxLabel>
                  ))}
                </Options>
              )}
            </WrapperOpenOptions>
          </Filter2>
        )}
      </FilterWrapper>
      <CheckButton checkboxes={checkboxes} handleCheckboxChange={handleCheckboxChange} />
    </>
  );
};