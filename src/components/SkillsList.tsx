import _ from 'lodash';
import React from 'react';
import styled from 'styled-components';
import icons from '../assets/skillicons/*.png';

const skillNames = Object.keys(icons).filter(x => x !== 'overall');

const List = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 10vw;
  height: 100vh;
  overflow-y: scroll;
  min-width: 200px;
  right: 0px;
  top: 0px;
`;

const ListItem = styled.div`
  padding: 0rem 1rem;
  margin-bottom: 0.25rem;
  margin-right: 0.25rem;
  height: 50px;
  line-height: 50px;
  background: gray;
  color: yellow;
  text-shadow: 1px 1px 0px black;
  user-select: none;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SkillIcon = styled.img`
  vertical-align: middle;
  margin-right: 1rem;
`;

export default function SkillsList() {
  return (
    <List>
      {skillNames.map((skillName, i) => {
        const iconUrl = icons[skillName];

        return (
          <ListItem key={i}>
            <SkillIcon src={iconUrl} draggable={false} />
            {_.capitalize(skillName)}
          </ListItem>
        );
      })}
    </List>
  );
}
