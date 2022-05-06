import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { VersionNumber } from '@components/VersionNumber';
import { InlineCode } from '@components/InlineCode';
import { CodeBlock } from '@components/CodeBlock';
import Margin from '@components/Margin';
import { Hyperlink } from '@components/Hyperlink';
import { Heading } from '@components/Heading';
import { InstallationCode } from '@components/InstallationCode';

const SliderInstallation = () => {
  return (
    <Fragment>
      <Meta
        title="Slider Basic Setup"
      />
      <h1>
        Basic Setup
      </h1>
      <p>
        {'Latest version: '}
        <VersionNumber
          name="slider"
          element='span'
        />
      </p>
      <Margin bottom="xs">
        <Heading
          id="installation"
          href="/docs/slider/setup#installation"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/slider/setup#installation`}
          element='h5'
        >
          Installation
        </Heading>
        <InstallationCode name="slider" />
      </Margin>
      <p>
        {'To create a slider, wrap any portion of your app with the '}
        <Hyperlink
          href="/docs/slider/api#provider"
          underline
        >
          <InlineCode>
            {'<SliderProvider>'}
          </InlineCode>
        </Hyperlink>
        {'. This component does not render anything in the DOM and is where the '}
        <Hyperlink
          href="/docs/slider/api#provider-props"
          underline
        >
          slider settings
        </Hyperlink>
        {' are defined. Inside of this, render a '}
        <InlineCode>
          <Hyperlink
            href="/docs/slider/api#track"
            underline
          >
            {'<SliderTrack>'}
          </Hyperlink>
        </InlineCode>
        {'. This will add a scrollable element onto the page which overflow its content as necessary. Then, nest as many '}
        <InlineCode>
          <Hyperlink
            href="/docs/slider/api#slide"
            underline
          >
            {'<Slide>'}
          </Hyperlink>
        </InlineCode>
        {' components within the track as necessary.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import React from 'react';
import { SliderProvider, SliderTrack, Slide } from \'@faceless-ui/slider\';

export const MyComponent = () => {
  return (
    <SliderProvider
      slidesToShow={1}
    >
      <SliderTrack>
        <Slide index={0}>
          Slide 1
        </Slide>
        <Slide index={1}>
          Slide 2
        </Slide>
      </SliderTrack>
    </SliderProvider>
  )
}`}
        </CodeBlock>
      </Margin>
      <p>
        Pro tip: These components do not need to be direct descendants of one another.
      </p>
      <Heading
        id="navigation"
        href="/docs/slider/setup#navigation"
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/slider/setup#navigation`}
        element='h5'
      >
        Slider navigation
      </Heading>
      <p>
        {'If your slider is not free-scrolling, drag-scrolling, or auto-playing, you will need to render navigation buttons. Conveniently, the '}
        <InlineCode>
          <Hyperlink
            href="/docs/slider/api#button"
            underline
          >
            {'<SliderButton>'}
          </Hyperlink>
        </InlineCode>
        {' component solves the most common navigation needs and is highly customizable.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import React from 'react';
import { SliderProvider, SliderTrack, Slide, SliderButton } from \'@faceless-ui/slider\';

export const MyComponent = () => {
  return (
    <SliderProvider
      slidesToShow={1}
    >
      <SliderButton direction="prev">
        Previous
      </SliderButton>
      <SliderButton direction="next">
        Next
      </SliderButton>
      <SliderTrack>
        <Slide index={0}>
          Slide 1
        </Slide>
        <Slide index={1}>
          Slide 2
        </Slide>
      </SliderTrack>
    </SliderProvider>
  )
}`}
        </CodeBlock>
      </Margin>
      <p>
        {'Alternatively, you could wire up your own button using methods on the '}
        <Hyperlink
          href="/docs/slider/api#context"
          underline
        >
          slider context
        </Hyperlink>
        {'. To do this, access the '}

        <InlineCode>
          goToNextSlide
        </InlineCode>
        {' method with the '}
        <InlineCode>
          useSlider
        </InlineCode>
        {' hook.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import { SliderProvider, SliderTrack, Slide, useSlider } from \'@faceless-ui/slider\';

export const MyButton = () => {
  const { goToNextSlide } = useSlider();
  return (
    <button onClick={goToNextSlide}>
      Next
    </button>
  )
}

export const MyComponent = () => {
  return (
    <SliderProvider
      slidesToShow={1}
    >
      <MyButton />
      <SliderTrack>
        <Slide index={0}>
          Slide 1
        </Slide>
        <Slide index={1}>
          Slide 2
        </Slide>
      </SliderTrack>
    </SliderProvider>
  )
}`}
        </CodeBlock>
      </Margin>
      <Heading
        id="sync"
        href="/docs/slider/setup#sync"
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/slider/setup#sync`}
        element='h5'
      >
        Synchronized sliders
      </Heading>
      <p>
        {'It is also possible to synchronize multiple sliders, so the navigation of one slider triggers another. To do this, lift the index of one slider using the '}
        <InlineCode>
          onSlide
        </InlineCode>
        {' prop. This is a callback function that will fire on every slide change with the current slide index. Then, use this value to control another slider by passing it into its '}
        <InlineCode>
          currentSlideIndex
        </InlineCode>
        {' prop.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import React, { useState } from 'react';
import { SliderProvider, SliderTrack, Slide } from \'@faceless-ui/slider\';

export const MyComponent = () => {
  const [index, setIndex] = useState();

  return (
    <SliderProvider
      slidesToShow={1}
      onSlide={(incomingIndex) => {
        setIndex(incomingIndex);
      }}
    >
      <SliderTrack>
        <Slide index={0}>
          Slide 1
        </Slide>
        <Slide index={1}>
          Slide 2
        </Slide>
      </SliderTrack>
    </SliderProvider>
    <SliderProvider
      slidesToShow={1}
      currentSlideIndex={index}
    >
      <SliderTrack>
        <Slide index={0}>
          Description for slide 1
        </Slide>
        <Slide index={1}>
          Description for slide 2
        </Slide>
      </SliderTrack>
    </SliderProvider>
  )
}`}
        </CodeBlock>
      </Margin>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/slider/setup.tsx`}
    />
  )
};

SliderInstallation.Layout = DocLayout;

export default SliderInstallation;
