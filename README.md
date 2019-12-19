
[![Bonsai Asset Badge](https://img.shields.io/badge/CHANGEME-Download%20Me-brightgreen.svg?colorB=89C967&logo=sensu)](https://bonsai.sensu.io/assets/CHANGEME/CHANGEME) [![TravisCI Build Status](https://travis-ci.org/CHANGEME/sensu-CHANGEME.svg?branch=master)
](https://travis-ci.org/CHANGEME/sensu-CHANGEME)

# Sensu Go CHANGEME Filter

TODO: Table of Contents

- [Overview](#overview)
- [Usage examples](#usage-examples)
- [Configuration](#configuration)
  - [Asset registration](#asset-registration)
  - [Asset configuration](#asset-configuration)
  - [Resource(CHANGEME to: check,filter,mutator,handler) configuration](#resource-configuration)
- [Functionality](#functionality)
- [Installation from source and contributing](#installation-from-source-and-contributing)

## Overview

TODO: Write an overview of the filter's functionality.

## Configuration

### Asset Registration

Assets are the best way to make use of this filter. If you're not using an asset, please consider doing so! If you're using sensuctl 5.13 or later, you can use the following command to add the asset: 

`sensuctl asset add CHANGEME/sensu-CHANGEME:VERSION`

If you're using an earlier version of sensuctl, you can find the asset on the [Bonsai Asset Index](https://bonsai.sensu.io/assets/CHANGEME/sensu-CHANGEME).

### Asset configuration

TODO: Provide an example asset manifest

```yml
---
type: Asset
api_version: core/v2
metadata:
  name: CHANGEME
spec:
  url: https://CHANGEME
  sha512: CHANGEME
```

### Resource configuration

Example Sensu Go definition:

```yml
---
api_version: core/v2
type: EventFilter
metadata:
  namespace: default
  name: CHANGEME
spec:
  "...": "..."

```

### Functionality

TODO: Document anything special needed for this filter to function. Does it need an on-disk configuration? Does it require anything special to operate?

## Installation from source and contributing

The preferred way of installing and deploying this filter is to use it as an [asset]. If you would like to install the filter from source or contribute to it, download the latest version of the sensu-CHANGEME from [releases][1].

For more information about contributing to this filter, see https://github.com/sensu/sensu-go/blob/master/CONTRIBUTING.md

[1]: https://github.com/CHANGEME/sensu-CHANGEME/releases
[2]: #asset-registration
