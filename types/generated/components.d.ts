import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentEvent extends Schema.Component {
  collectionName: 'contentEvents';
  info: {
    displayName: 'Event';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText;
    startDate: Attribute.Date & Attribute.Required;
    endDate: Attribute.Date & Attribute.Required;
  };
}

export interface ContentSection extends Schema.Component {
  collectionName: 'sections';
  info: {
    displayName: 'Section';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.RichText;
  };
}

export interface ContentText extends Schema.Component {
  collectionName: 'contentTexts';
  info: {
    displayName: 'Text';
    description: '';
  };
  attributes: {
    text: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.event': ContentEvent;
      'content.section': ContentSection;
      'content.text': ContentText;
    }
  }
}
