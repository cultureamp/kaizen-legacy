import React from "react"
import { Base, BaseProps } from "./Base"
import { VideoPlayerProps, VideoPlayer } from "./Players/VideoPlayer"

export interface SceneProps
  extends Pick<BaseProps, "alt" | "classNameOverride"> {
  enableAspectRatio?: boolean
}

interface BaseAnimatedSceneProps
  extends SceneProps,
    Pick<VideoPlayerProps, "autoplay" | "loop"> {
  isAnimated?: boolean
}

interface AnimatedProps extends Omit<BaseAnimatedSceneProps, "alt"> {
  isAnimated: true
  alt?: never
}
interface NotAnimatedProps extends BaseAnimatedSceneProps {
  isAnimated?: false
  autoplay?: never
  loop?: never
}

export type AnimatedSceneProps = AnimatedProps | NotAnimatedProps

// Brand Moments
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const BrandMomentPositiveOutro = ({
  isAnimated,
  enableAspectRatio,
  alt,
  ...otherProps
}: AnimatedSceneProps): JSX.Element => {
  if (isAnimated) {
    return (
      <VideoPlayer
        aspectRatio={enableAspectRatio ? "landscape" : undefined}
        {...otherProps}
        fallback="illustrations/heart/scene/brand-moments-positive-outro"
        source="illustrations/heart/scene/brand-moments-positive-outro"
      />
    )
  }
  return (
    <Base
      aspectRatio={enableAspectRatio ? "landscape" : undefined}
      alt={alt || ""}
      {...otherProps}
      name="illustrations/heart/scene/brand-moments-positive-outro.png"
    />
  )
}
BrandMomentPositiveOutro.displayName = "BrandMomentPositiveOutro"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const BrandMomentLogin = ({
  isAnimated,
  enableAspectRatio,
  alt,
  ...otherProps
}: AnimatedSceneProps): JSX.Element => {
  if (isAnimated) {
    return (
      <VideoPlayer
        aspectRatio={enableAspectRatio ? "landscape" : undefined}
        {...otherProps}
        fallback="illustrations/heart/scene/brand-moments-login"
        source="illustrations/heart/scene/brand-moments-login"
      />
    )
  }
  return (
    <Base
      aspectRatio={enableAspectRatio ? "landscape" : undefined}
      alt={alt || ""}
      {...otherProps}
      name="illustrations/heart/scene/brand-moments-login.png"
    />
  )
}
BrandMomentLogin.displayName = "BrandMomentLogin"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const BrandMomentError = ({
  isAnimated,
  enableAspectRatio,
  alt,
  ...otherProps
}: AnimatedSceneProps): JSX.Element => {
  if (isAnimated) {
    return (
      <VideoPlayer
        aspectRatio={enableAspectRatio ? "landscape" : undefined}
        {...otherProps}
        fallback="illustrations/heart/scene/brand-moments-error"
        source="illustrations/heart/scene/brand-moments-error"
      />
    )
  }
  return (
    <Base
      aspectRatio={enableAspectRatio ? "landscape" : undefined}
      alt={alt || ""}
      {...otherProps}
      name="illustrations/heart/scene/brand-moments-error.png"
    />
  )
}
BrandMomentError.displayName = "BrandMomentError"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const BrandMomentNewAccountOnboarding = ({
  enableAspectRatio,
  ...props
}: SceneProps): JSX.Element => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/brand-moments-new-account-onboarding.svg"
  />
)
BrandMomentNewAccountOnboarding.displayName = "BrandMomentNewAccountOnboarding"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const BrandMomentUploadEmployeeData = ({
  enableAspectRatio,
  ...props
}: SceneProps): JSX.Element => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/brand-moments-upload-employee-data.svg"
  />
)
BrandMomentUploadEmployeeData.displayName = "BrandMomentUploadEmployeeData"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const BrandMomentStarterKit = ({
  enableAspectRatio,
  ...props
}: SceneProps): JSX.Element => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/brand-moments-starter-kit.svg"
  />
)
BrandMomentStarterKit.displayName = "BrandMomentStarterKit"

// Empty States
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const EmptyStatesAction = ({
  isAnimated,
  enableAspectRatio,
  alt,
  ...otherProps
}: AnimatedSceneProps): JSX.Element => {
  if (isAnimated) {
    return (
      <VideoPlayer
        aspectRatio={enableAspectRatio ? "landscape" : undefined}
        {...otherProps}
        fallback="illustrations/heart/scene/empty-states-action"
        source="illustrations/heart/scene/empty-states-action"
      />
    )
  }
  return (
    <Base
      aspectRatio={enableAspectRatio ? "landscape" : undefined}
      alt={alt || ""}
      {...otherProps}
      name="illustrations/heart/scene/empty-states-action.svg"
    />
  )
}
EmptyStatesAction.displayName = "EmptyStatesAction"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const EmptyStatesInformative = ({
  isAnimated,
  enableAspectRatio,
  alt,
  ...otherProps
}: AnimatedSceneProps): JSX.Element => {
  if (isAnimated) {
    return (
      <VideoPlayer
        aspectRatio={enableAspectRatio ? "landscape" : undefined}
        {...otherProps}
        fallback="illustrations/heart/scene/empty-states-informative"
        source="illustrations/heart/scene/empty-states-informative"
      />
    )
  }
  return (
    <Base
      aspectRatio={enableAspectRatio ? "landscape" : undefined}
      alt={alt || ""}
      {...otherProps}
      name="illustrations/heart/scene/empty-states-informative.svg"
    />
  )
}
EmptyStatesInformative.displayName = "EmptyStatesInformative"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const EmptyStatesNegative = ({
  isAnimated,
  enableAspectRatio,
  alt,
  ...otherProps
}: AnimatedSceneProps): JSX.Element => {
  if (isAnimated) {
    return (
      <VideoPlayer
        aspectRatio={enableAspectRatio ? "landscape" : undefined}
        {...otherProps}
        fallback="illustrations/heart/scene/empty-states-negative"
        source="illustrations/heart/scene/empty-states-negative"
      />
    )
  }
  return (
    <Base
      aspectRatio={enableAspectRatio ? "landscape" : undefined}
      alt={alt || ""}
      {...otherProps}
      name="illustrations/heart/scene/empty-states-negative.svg"
    />
  )
}
EmptyStatesNegative.displayName = "EmptyStatesNegative"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const EmptyStatesPositive = ({
  isAnimated,
  enableAspectRatio,
  alt,
  ...otherProps
}: AnimatedSceneProps): JSX.Element => {
  if (isAnimated) {
    return (
      <VideoPlayer
        aspectRatio={enableAspectRatio ? "landscape" : undefined}
        {...otherProps}
        fallback="illustrations/heart/scene/empty-states-positive"
        source="illustrations/heart/scene/empty-states-positive"
      />
    )
  }
  return (
    <Base
      aspectRatio={enableAspectRatio ? "landscape" : undefined}
      alt={alt || ""}
      {...otherProps}
      name="illustrations/heart/scene/empty-states-positive.svg"
    />
  )
}
EmptyStatesPositive.displayName = "EmptyStatesPositive"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const EmptyStatesNeutral = ({
  isAnimated,
  enableAspectRatio,
  alt,
  ...otherProps
}: AnimatedSceneProps): JSX.Element => {
  if (isAnimated) {
    return (
      <VideoPlayer
        aspectRatio={enableAspectRatio ? "landscape" : undefined}
        {...otherProps}
        fallback="illustrations/heart/scene/empty-states-neutral"
        source="illustrations/heart/scene/empty-states-neutral"
      />
    )
  }
  return (
    <Base
      aspectRatio={enableAspectRatio ? "landscape" : undefined}
      alt={alt || ""}
      {...otherProps}
      name="illustrations/heart/scene/empty-states-neutral.svg"
    />
  )
}
EmptyStatesNeutral.displayName = "EmptyStatesNeutral"

// Information Modals
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const Information360Upgrade = ({
  enableAspectRatio,
  ...props
}: SceneProps): JSX.Element => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/information-modals-360-upgrade.svg"
  />
)
Information360Upgrade.displayName = "Information360Upgrade"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const InformationDemographicFocus = ({
  enableAspectRatio,
  ...props
}: SceneProps): JSX.Element => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/information-modals-demographic-focus.svg"
  />
)
InformationDemographicFocus.displayName = "InformationDemographicFocus"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const InformationTurnoverCalculator = ({
  enableAspectRatio,
  ...props
}: SceneProps): JSX.Element => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/information-modals-turnover-calculator.svg"
  />
)
InformationTurnoverCalculator.displayName = "InformationTurnoverCalculator"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const InformationTurnoverForecast = ({
  enableAspectRatio,
  ...props
}: SceneProps): JSX.Element => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/information-modals-turnover-forecast.svg"
  />
)
InformationTurnoverForecast.displayName = "InformationTurnoverForecast"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const InformationEmergingTrends = ({
  enableAspectRatio,
  ...props
}: SceneProps): JSX.Element => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/information-modals-emerging-trends.svg"
  />
)
InformationEmergingTrends.displayName = "InformationEmergingTrends"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const InformationEmployeeLifecycle = ({
  enableAspectRatio,
  ...props
}: SceneProps): JSX.Element => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/information-modals-employee-lifecycle.svg"
  />
)
InformationEmployeeLifecycle.displayName = "InformationEmployeeLifecycle"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const InformationReportOwner = ({
  enableAspectRatio,
  ...props
}: SceneProps): JSX.Element => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/information-modals-report-owner.svg"
  />
)
InformationReportOwner.displayName = "InformationReportOwner"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const InformationReportOwnerByRule = ({
  enableAspectRatio,
  ...props
}: SceneProps): JSX.Element => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/information-modals-report-owner-by-rule.svg"
  />
)
InformationReportOwnerByRule.displayName = "InformationReportOwnerByRule"

// Miscellaneous
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const Collaboration = ({
  enableAspectRatio,
  ...props
}: SceneProps): JSX.Element => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/miscellaneous-collaboration.svg"
  />
)
Collaboration.displayName = "Collaboration"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const Communication = ({
  enableAspectRatio,
  ...props
}: SceneProps): JSX.Element => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/miscellaneous-communications.svg"
  />
)
Communication.displayName = "Communication"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const CompanyValues = ({
  enableAspectRatio,
  ...props
}: SceneProps): JSX.Element => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/miscellaneous-company-values.svg"
  />
)
CompanyValues.displayName = "CompanyValues"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const ConnectTheDots = ({
  enableAspectRatio,
  ...props
}: SceneProps): JSX.Element => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/miscellaneous-connect-the-dots.svg"
  />
)
ConnectTheDots.displayName = "ConnectTheDots"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const CultureLab = ({
  enableAspectRatio,
  ...props
}: SceneProps): JSX.Element => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/miscellaneous-culture-lab.svg"
  />
)
CultureLab.displayName = "CultureLab"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const TermsAgreement = ({
  enableAspectRatio,
  ...props
}: SceneProps): JSX.Element => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/miscellaneous-terms-agreement.svg"
  />
)
TermsAgreement.displayName = "TermsAgreement"

// Skills Coach
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const SkillsCoach1On1Meetings = ({
  enableAspectRatio,
  ...props
}: SceneProps): JSX.Element => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-1-on-1-meetings.svg"
  />
)
SkillsCoach1On1Meetings.displayName = "SkillsCoach1On1Meetings"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const SkillsCoachCoaching = ({
  enableAspectRatio,
  ...props
}: SceneProps): JSX.Element => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-coaching.svg"
  />
)
SkillsCoachCoaching.displayName = "SkillsCoachCoaching"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const SkillsCoachEmployeeDevelopment = ({
  enableAspectRatio,
  ...props
}: SceneProps): JSX.Element => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-employee-development.svg"
  />
)
SkillsCoachEmployeeDevelopment.displayName = "SkillsCoachEmployeeDevelopment"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const SkillsCoachEssentialFeedback = ({
  enableAspectRatio,
  ...props
}: SceneProps): JSX.Element => (
  <Base
    aspectRatio={enableAspectRatio ? "portrait" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-essential-feedback.svg"
  />
)
SkillsCoachEssentialFeedback.displayName = "SkillsCoachEssentialFeedback"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const SkillsCoachEssentialProductivity = ({
  enableAspectRatio,
  ...props
}: SceneProps): JSX.Element => (
  <Base
    aspectRatio={enableAspectRatio ? "portrait" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-essential-productivity.svg"
  />
)
SkillsCoachEssentialProductivity.displayName =
  "SkillsCoachEssentialProductivity"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const SkillsCoachEssentialResilience = ({
  enableAspectRatio,
  ...props
}: SceneProps): JSX.Element => (
  <Base
    aspectRatio={enableAspectRatio ? "portrait" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-essential-resilience.svg"
  />
)
SkillsCoachEssentialResilience.displayName = "SkillsCoachEssentialResilience"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const SkillsCoachInfluentialCommunication = ({
  enableAspectRatio,
  ...props
}: SceneProps): JSX.Element => (
  <Base
    aspectRatio={enableAspectRatio ? "portrait" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-influential-communication.svg"
  />
)
SkillsCoachInfluentialCommunication.displayName =
  "SkillsCoachInfluentialCommunication"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const SkillsCoachLeadingChange = ({
  enableAspectRatio,
  ...props
}: SceneProps): JSX.Element => (
  <Base
    aspectRatio={enableAspectRatio ? "portrait" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-leading-change.svg"
  />
)
SkillsCoachLeadingChange.displayName = "SkillsCoachLeadingChange"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const SkillsCoachFeedback = ({
  enableAspectRatio,
  ...props
}: SceneProps): JSX.Element => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-feedback.svg"
  />
)
SkillsCoachFeedback.displayName = "SkillsCoachFeedback"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const SkillsCoachManagerHub = ({
  enableAspectRatio,
  ...props
}: SceneProps): JSX.Element => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-manager-hub.svg"
  />
)
SkillsCoachManagerHub.displayName = "SkillsCoachManagerHub"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const SkillsCoachProductivity = ({
  enableAspectRatio,
  ...props
}: SceneProps): JSX.Element => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-productivity.svg"
  />
)
SkillsCoachProductivity.displayName = "SkillsCoachProductivity"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const SkillsCoachRemoteManager = ({
  enableAspectRatio,
  ...props
}: SceneProps): JSX.Element => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-remote-manager.svg"
  />
)
SkillsCoachRemoteManager.displayName = "SkillsCoachRemoteManager"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const SkillsCoachResilience = ({
  enableAspectRatio,
  ...props
}: SceneProps): JSX.Element => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-resilience.svg"
  />
)
SkillsCoachResilience.displayName = "SkillsCoachResilience"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const SkillsCoachStrategy = ({
  enableAspectRatio,
  ...props
}: SceneProps): JSX.Element => (
  <Base
    aspectRatio={enableAspectRatio ? "portrait" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-strategy.svg"
  />
)
SkillsCoachStrategy.displayName = "SkillsCoachStrategy"

// Engagement
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const Programs = ({
  enableAspectRatio,
  ...props
}: SceneProps): JSX.Element => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/engagement-programs.svg"
  />
)
Programs.displayName = "Programs"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const EngagementSurveySummaryFemale = ({
  enableAspectRatio,
  ...props
}: SceneProps): JSX.Element => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/engagement-survey-summary-female.svg"
  />
)
EngagementSurveySummaryFemale.displayName = "EngagementSurveySummaryFemale"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const EngagementSurveySummaryMale = ({
  enableAspectRatio,
  ...props
}: SceneProps): JSX.Element => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/engagement-survey-summary-male.svg"
  />
)
EngagementSurveySummaryMale.displayName = "EngagementSurveySummaryMale"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const SurveyOverviewClosed = ({
  enableAspectRatio,
  ...props
}: SceneProps): JSX.Element => (
  <Base
    aspectRatio={enableAspectRatio ? "portrait" : undefined}
    {...props}
    name="illustrations/heart/scene/survey-overview-closed.svg"
  />
)
SurveyOverviewClosed.displayName = "SurveyOverviewClosed"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const SurveyGetStarted = ({
  enableAspectRatio,
  ...props
}: SceneProps): JSX.Element => (
  <Base
    aspectRatio={enableAspectRatio ? "portrait" : undefined}
    {...props}
    name="illustrations/heart/scene/getting-started.svg"
  />
)
SurveyGetStarted.displayName = "SurveyGetStarted"
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const PerformanceCompanySettings = ({
  enableAspectRatio,
  ...props
}: SceneProps): JSX.Element => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/performance-company-settings.svg"
  />
)
PerformanceCompanySettings.displayName = "PerformanceCompanySettings"
