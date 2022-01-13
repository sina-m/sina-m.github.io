import React from 'react';
import { Stack } from '@fluentui/react/lib/Stack';
import { DefaultButton } from '@fluentui/react/lib/Button';

export function Projects() {
  return (
    <Stack wrap>
      <DefaultButton text="Spotify Playlist Sorting Tool" href='https://mango-plant-014f3e410.azurestaticapps.net/' />
      <DefaultButton text="Arbitrary Probability Distribution Calculator" href='witty-forest-045651c10.azurestaticapps.net/' />
    </Stack>
  );
}
