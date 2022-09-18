import React from 'react';

import { Button, Input, Select } from '@/Fields';
import { useFormEvents } from '@/Hooks';
import { Actions, State } from '@/Store';
import { Form, Main } from '@/Templates';

export default function Home() {
  const { changeEvent, state, formDispatch } = useFormEvents(State.FORM);
  const {
    data, validation, disabled,
  } = state;

  // Hook OR Lure
  // - Type ( select from list )

  const categoryOptions = [
    {
      title: 'Rod',
      value: 'Rod',
    },
    {
      title: 'Reel',
      value: 'Reel',
    },
    {
      title: 'Line',
      value: 'Line',
    },
    {
      title: 'Hook OR Lure',
      value: 'Hook OR Lure',
    },
    {
      title: 'Lure',
      value: 'Lure',
    },
  ];

  const subFields = {
    brand: {
      name: 'brand',
      label: 'Brand Name',
      value: data.brand,
      errorFeedBack: 'Brand Field Is Required.',
      validation: validation.brand,
    },
    modelName: {
      name: 'model',
      label: 'Model Name',
      value: data.model,
      errorFeedBack: 'Model Field Is Required.',
      validation: validation.model,
    },
    link: {
      type: 'url',
      name: 'link',
      label: 'Link Name',
      value: data.link,
      errorFeedBack: 'Link Field Is Required.',
      validation: validation.link,
    },
    type: {
      type: 'select',
      name: 'type',
      label: 'Choose Type',
      value: data.type,
      errorFeedBack: 'Type Field Is Required.',
      validation: validation.type,
    },
  };

  const inputs = {
    Rod: [subFields.brand, subFields.modelName, subFields.link],
    Reel: [subFields.brand, subFields.modelName, subFields.link],
    Line: [subFields.brand, subFields.modelName, subFields.link,
      {
        ...subFields.type,
        options: [
          {
            title: 'Braid',
            value: 'Braid',
          },
          {
            title: 'Mono',
            value: 'Mono',
          },
          {
            title: 'Fluorocarbon',
            value: 'Fluorocarbon',
          },
        ],
      },
      {
        name: 'length',
        label: 'Length',
        value: data.length,
        errorFeedBack: 'Length Field Is Required.',
        validation: validation.length,
      },
    ],
    'Hook OR Lure': [subFields.brand, subFields.modelName, subFields.link,
      {
        ...subFields.type,
        options: [
          {
            title: '',
            value: '',
          },
        ],
      },
      {
        name: 'size',
        label: 'Size Name',
        value: data.size,
        errorFeedBack: 'Size Field Is Required.',
        validation: validation.size,
      },
    ],
    Lure: [subFields.brand, subFields.modelName, subFields.link],
  };

  console.log('Form Data:', state);

  return (
    <Main
      title="Fishing Equipment"
      description="Fishing Equipment Description"
    >
      <Form>
        <h1 className="mb-1 text-2xl font-bold text-center text-purple-500 uppercase">Logo Image</h1>
        <p className="mb-4 text-center">Please choose the category and fill the form</p>
        <Select
          label="Choose Category"
          name="category"
          value={data.category}
          errorFeedBack="Please Select Category First."
          options={categoryOptions}
          changeEvent={(e) => {
            changeEvent(e);
            formDispatch({ type: Actions.REMOVE_KEY, name: 'inputs' });
          }}
          validation={validation.category}
        />
        {data.category && (
        <div className="p-5 mt-2 mb-4 rounded-md bg-gray-50">
          <h1 className="mb-1 text-xl font-bold text-center uppercase">Fill The Form</h1>
          {inputs[data.category].map((input) => (
            input.type !== 'select'
              ? (
                <Input
                  key={input.label}
                  label={input.label}
                  name={input.name}
                  value={input.value}
                  errorFeedBack={input.errorFeedBack}
                  changeEvent={({ target: { name, value } }) => formDispatch(
                    { type: Actions.UPDATE_FORM, name, value },
                  )}
                  validation={input.validation}
                />
              )
              : (
                <Select
                  key={input.label}
                  label={input.label}
                  name={input.name}
                  value={input.value}
                  errorFeedBack={input.errorFeedBack}
                  options={input.options}
                  changeEvent={({ target: { name, value } }) => formDispatch(
                    { type: Actions.UPDATE_FORM, name, value },
                  )}
                  validation={input.validation}
                />
              )
          ))}
        </div>
        )}
        <Button disabled={disabled} clickEvent={() => {}}>Request Now</Button>
      </Form>
    </Main>
  );
}
