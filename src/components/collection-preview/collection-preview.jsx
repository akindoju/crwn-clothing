import React from 'react';
import CollectionItem from '../collection-item/collection-item';
import {
  CollectionPreviewContainer,
  TitleText,
  PreviewContainer,
} from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <TitleText>{title}</TitleText>
    <PreviewContainer>
      {items
        .filter((item, i) => i < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
