# Contributing

**WARNING** Please consider upgrading to use components in the [kaizen-design-system](https://github.com/cultureamp/kaizen-design-system/) repo **before** making any pull requests to this repo.

We will only consider accepting changes to fix **critical** issues.

## Contributing code

### Quality and reviews

Every code contribution **must** have:

1. A design review from a designer
2. Semantic versioning and conventional commit PR titles: see [Releasing packages](#releasing-packages)
3. Communications: share your new component or changes on Slack and at relevant Front End Practice meetings

Every code contribution **should strive to** have:

- Basic level of unit tests
- New or updated Storybook stories

To update a component in code:

- Ask for a code review from a design systems advocate (an "advocado"), #prod_design_systems, or someone in your team who is experienced with Kaizen*
- Notify the front-end engineering practice (#pract_front_end_eng) of any possible breaking changes
- Notify the QA practice of any possible breaking changes

\* **If you're new to Kaizen, please ask #prod_design_systems to set up an onboarding session to get you up to speed.** If you have an urgent PR to merge before that happens, it is safest to ask #prod_design_systems to review it to catch any issues.

### Design tokens

See the [design tokens](https://github.com/cultureamp/kaizen-design-system/tree/main/packages/generator) package.

### Browser and device support

To learn more about what browsers and devices we support in Kaizen Component Library, Culture Amp employees can see [the Browser Support wiki page](https://cultureamp.atlassian.net/wiki/spaces/Prod/pages/1572948/Browser+Support+and+Stats).

### Local development with other front-end codebases

To strengthen the Kaizen Design System, we encourage engineers to take a component-first development approach. By concentrating on developing Kaizen components in Storybook, we are likely to improve the API design and achieve good separation of concerns, avoiding components tightly coupled to specific applications. If, however, you want to test a component in the context of another front-end codebase, you can [yalc](https://github.com/wclr/yalc) your local version of `@kaizen/component-library` with your other front-end codebase.

#### For core components

**Step 1**: Make your local copy of `@kaizen/component-library` available.

```sh
# Navigate to code source
$ cd ./packages/component-library

# Publish the package
$ yalc publish

```

**Step 2**: Install `@kaizen/component-library` in your other front-end codebase.

```sh
# Navigate to code source
$ cd <your_code>/cultureamp/YOUR_FRONT_END_CODEBASE

# Add the package to your front-end codebase
$ yalc add @kaizen/component-library

# Yarn install
$ yarn

```

Your local Kaizen changes will now show in your other front-end codebase. If you want to test subsequent updates to the component, you'll need to run through step 1 again to republish the component, and then run `yalc update` in your front-end codebase to see the new changes.

**Step 3**: Removing the package

When you are done, remove the package from your front-end codebase:

`yalc remove @kaizen/component-library`


## Releasing packages

Automated releases to the npm public registry are triggered for all pull requests containing modifications to one or more npm packages (found in the `/packages/` directory). The information required to determine the version update for each release is taken from the title and content of the pull request.

### Release workflow

To release a new version of a package, create a pull request that:

- Modifies only the package(s) you wish to release ([see below](#updating-multiple-packages))
- Has a Changeset file ([see below](#creating-a-changeset))
    - This step is optional, but recommended. Exceptions are for things like docs or tooling changes.

Once that pull request is merged into main, a Changeset PR will automatically be created with the details of your change, and once the Changeset PR is merged, an automated release process will be triggered and the newly published package version will be available on the npm public registry.

Note: This process is so we can roll more than one change in a single release eg. Person A adds Feature X to `@kaizen/button` and person B adds Feature Y to `@kaizen/button`, changesets will combine these into a single minor version, rather than 2.

### Semantic Versioning

All npm packages follow strict semantic versioning (or _semver_). Semantic versioning gives specific meaning to changes in version numbers, as follows:

> Given a version number `MAJOR.MINOR.PATCH`, increment the:
>
> - `MAJOR` version when you make incompatible API changes,
> - `MINOR` version when you add functionality in a backwards compatible manner, and
> - `PATCH` version when you make backwards compatible bug fixes.

— <https://semver.org/>

**Note that we do not update package version numbers directly**, but instead depend on a [Changeset](#creating-a-changese) workflow which will version and release packages according to the content of changeset files.

### Creating a Changeset

Kaizen utilises [Changesets](https://github.com/changesets/changesets) to outline the changes made to specific packages as well as keeps all depenencies of the changed packages up to date.

Creating a changeset is straight forward:

1. Run `yarn changeset` (or `yarn commit`)
2. Select the packages you have made changes to with spacebar, followed by enter
3. You will then be asked which packages should have a Major, Minor or Patch. So following [Semantic Versioning](#semantic-versioning), select the packages that apply and hit enter (you can also hit enter to skip)
4. Add a short [description](#description).

A changeset `md` file will be added to your branch which you are free to modify the details of if necessary.


#### Description

The `description` should be a short (less than ~60 characters) summary of changes introduced in the release. This summary will be included in the CHANGELOG (see the [releases page](https://github.com/cultureamp/kaizen-design-system/releases)), along with the commit type, a link to the pull request which triggered the release, and a detailed summary of any breaking changes.

Note that since the `description` will be included in the CHANGELOG — and may be the only summary of the changes that your colleagues will encounter — it is helpful for you to include a concise summary of _how the package is different_ following the release, written in the [imperative mood](https://chris.beams.io/posts/git-commit/#imperative). For example `fix: Address accessibility bug in the Gizmo component`.

#### Updating multiple packages

Note that in the case that a pull request touches files from more than one package, all of those packages will be released to the npm registry with the specified update. Sometimes this might be desirable (e.g. when performing a bulk update to package docs), but in general, **be on the lookout for pull requests which touch more than one package**, and break those changes up into separate pull requests!

## Canary releases

Canary releases create a way to test changes in production-like environments, and are a great way to reduce the risk of proposed changes to a package. Use canary releases when you're working on a significant refactor, experimenting with new technology, or making other large scale changes.

Any merged pull request into the (protected) `canary` branch will create a canary release, publishing a [pre-release version](https://semver.org/#spec-item-9) of any packages touched by that branch. Only repo admins are able to directly push to the `canary` branch without a pull request.

For example, opening a pull request to merge a branch containing `feat: Even more glitter` into the branch `canary` will release e.g. `@kaizen/some-package@1.1.0-canary.0` to npm. This pre-release package version will then be available elsewhere for testing those changes prior to a full release.

:warning: **Note that canary releases should not be used in production.**

## Using new package releases

To use a newly released version of the Kaizen Component Library (or any other package) in a front-end codebase, run `yarn upgrade --latest <scoped package name>` (e.g. `yarn upgrade --latest @kaizen/component-library`).

Remember to always check the CHANGELOG (e.g. [`/packages/component-library/CHANGELOG.md`](./packages/component-library/CHANGELOG.md) or the [releases page](https://github.com/cultureamp/kaizen-design-system/releases)) for any package you wish to upgrade, paying extra attention to any breaking changes which have been introduced since the last version used in your project.

## Contributing components

To learn more about contributing components, see the [Kaizen Site: components overview](https://cultureamp.design/components/overview).

### Patterns

Refer to the [docs folder](docs) for code guidelines and patterns.

### Component generator

To generate a new component and package, new component within an existing package, or a subcomponent,
run the following command and follow the prompts:
```
yarn plop
```
