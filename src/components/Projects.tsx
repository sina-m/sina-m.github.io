import React from 'react';
import { Stack } from '@fluentui/react/lib/Stack';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { Link } from "react-router-dom";

export function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <nav>
        <Link to="/">Home</Link> | {" "}
        <Link to="/projects"><b>Projects</b></Link>
      </nav>
      <Stack wrap>
        <DefaultButton text="Spotify Playlist Sorting Tool" href='https://mango-plant-014f3e410.azurestaticapps.net/' />
        <DefaultButton text="Arbitrary Probability Distribution Calculator" href='witty-forest-045651c10.azurestaticapps.net/' />
      </Stack>
    </div>
  );
}
