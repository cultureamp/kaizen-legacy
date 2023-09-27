# Kaizen Legacy

This repo serves as a holding ground for all our existing packages that support the legacy versions of React 16/17.

We are currently in the process of migrating all components available in this repo to our new architecture.

## Why this repository exists
To help projects continue to use components that are tested in React 16 and 17 while they transition to React 18.

See [Solution Preview](https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3215819020/Solution+Preview+Ending+support+for+React+16+17+in+Kaizen) for more detail.


## Is it safe to use these "legacy" components?

**TL;DR yes.**

These components support the legacy versions of React 16 & 17.
If your project is not running React 18 yet, then these are the components you should use.

## Are these components going to be replaced by newer ones?

**TL;DR no.**

We are currently in the process of migrating all non-deprecated components within this repo to our new architecture, where they will continue to be made available.

## Do I need to wait for the new version?

No. Our goal is to modify as little as possible when moving the components from this repo to our new architecture. **Any changes made here will be migrated over.**

## Contribution
Please consider upgrading to use components in the [kaizen-design-system](https://github.com/cultureamp/kaizen-design-system/) repo **before** making any pull requests to this repo.

We will only consider accepting changes to fix **critical** issues.
