import React from "react"
import { Base, BaseProps } from "./Base"

export type SpotProps = Pick<BaseProps, "alt" | "classNameOverride"> & {
  enableAspectRatio?: boolean
}
export type AnimatedSpotProps = SpotProps & {
  /**
   *  Spot Illustrations are no longer supported
   *  @deprecated
   * */
  isAnimated?: boolean
}

// ------------------------------------------------------------------------- //
// ANIMATED ILLUSTRATIONS                                                    //
// ------------------------------------------------------------------------- //

/**
 * Moods
 */
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const Cautionary = ({
  enableAspectRatio,
  ...otherProps
}: AnimatedSpotProps): JSX.Element => {
  const illustrationPath = "illustrations/heart/spot/moods-cautionary.svg"
  const StaticIllustration = (
    <Base
      aspectRatio={enableAspectRatio ? "square" : undefined}
      {...otherProps}
      name={illustrationPath}
    />
  )
  return StaticIllustration
}

/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const Informative = ({
  enableAspectRatio,
  ...otherProps
}: AnimatedSpotProps): JSX.Element => {
  const illustrationPath = "illustrations/heart/spot/moods-informative.svg"
  const StaticIllustration = (
    <Base
      aspectRatio={enableAspectRatio ? "square" : undefined}
      {...otherProps}
      name={illustrationPath}
    />
  )
  return StaticIllustration
}

/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const Negative = ({
  enableAspectRatio,
  ...otherProps
}: AnimatedSpotProps): JSX.Element => {
  const illustrationPath = "illustrations/heart/spot/moods-negative.svg"
  const StaticIllustration = (
    <Base
      aspectRatio={enableAspectRatio ? "square" : undefined}
      {...otherProps}
      name={illustrationPath}
    />
  )
  return StaticIllustration
}

/**
 * @deprecated Use the non-gendered Positive illustration instead
 */
export const PositiveMale = ({
  enableAspectRatio,
  ...otherProps
}: SpotProps): JSX.Element => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...otherProps}
    name="illustrations/heart/spot/moods-positive.svg"
  />
)

/**
 * @deprecated Use the non-gendered Positive illustration instead
 */
export const PositiveFemale = ({
  enableAspectRatio,
  ...otherProps
}: AnimatedSpotProps): JSX.Element => {
  const illustrationPath = "illustrations/heart/spot/moods-positive.svg"
  const StaticIllustration = (
    <Base
      aspectRatio={enableAspectRatio ? "square" : undefined}
      {...otherProps}
      name={illustrationPath}
    />
  )

  return StaticIllustration
}

/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const Positive = ({
  enableAspectRatio,
  ...otherProps
}: AnimatedSpotProps): JSX.Element => {
  const illustrationPath = "illustrations/heart/spot/moods-positive.svg"
  const StaticIllustration = (
    <Base
      aspectRatio={enableAspectRatio ? "square" : undefined}
      {...otherProps}
      name={illustrationPath}
    />
  )
  // TODO Update url to use heart version.

  return StaticIllustration
}

/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const Assertive = ({
  enableAspectRatio,
  ...otherProps
}: AnimatedSpotProps): JSX.Element => {
  const illustrationPath = "illustrations/heart/spot/moods-assertive.svg"
  const StaticIllustration = (
    <Base
      aspectRatio={enableAspectRatio ? "square" : undefined}
      {...otherProps}
      name={illustrationPath}
    />
  )
  return StaticIllustration
}

// ------------------------------------------------------------------------- //
// STATIC ILLUSTRATIONS                                                      //
// ------------------------------------------------------------------------- //

const SPOT_ILLUSTRATION_BASE_PATH = "illustrations/heart/spot/"
const createSpotIllustration =
  (fileName: string) =>
  // eslint-disable-next-line react/display-name
  ({ enableAspectRatio, ...props }: SpotProps): JSX.Element => (
    <Base
      aspectRatio={enableAspectRatio ? "square" : undefined}
      {...props}
      name={`${SPOT_ILLUSTRATION_BASE_PATH}${fileName}`}
    />
  )

/**
 * Template Library / Engagement
 */
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const BenefitsSurvey = createSpotIllustration("template-library-benefits-survey.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const CustomSurvey = createSpotIllustration("template-library-custom-survey.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const CustomUnattributedSurvey = createSpotIllustration("template-library-custom-unattributed-survey.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const EngagementSurvey = createSpotIllustration("template-library-engagement-survey.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const InclusionSurvey = createSpotIllustration("template-library-inclusion-survey.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const QuickEngagementSurvey = createSpotIllustration("template-library-quick-engagement-survey.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const ValuesSurvey1 = createSpotIllustration("template-library-values-survey-1.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const ValuesSurvey2 = createSpotIllustration("template-library-values-survey-2.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const WellbeingSurvey1 = createSpotIllustration("template-library-wellbeing-survey-1.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const WellbeingSurvey2 = createSpotIllustration("template-library-wellbeing-survey-2.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const WellbeingSurvey3 = createSpotIllustration("template-library-wellbeing-survey-3.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const ChangeReadiness = createSpotIllustration("template-library-change-readiness.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const ChangeSuccess = createSpotIllustration("template-library-change-success.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const PerformanceDiagnostics = createSpotIllustration("template-library-performance-diagnostics.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const LeadingThroughCrisis = createSpotIllustration("template-library-leading-through-crisis.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const EmergencyResponse = createSpotIllustration("template-library-emergency-response.svg")

/**
 * Template Library / Experience
 */
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const CandidateSurvey = createSpotIllustration("template-library-candidate-survey.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const CustomOnboardSurvey = createSpotIllustration("template-library-custom-onboard-survey.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const ExitSurvey = createSpotIllustration("template-library-exit-survey.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const InternSurvey = createSpotIllustration("template-library-intern-survey.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const PhasedWeek1OnboardSurvey = createSpotIllustration("template-library-phased-week-1-onboard-survey.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const PhasedWeek5OnboardSurvey = createSpotIllustration("template-library-phased-week-5-onboard-survey.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const SinglePointOnboardSurvey = createSpotIllustration("template-library-single-point-onboard-survey.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const GeneralOnboardSurvey = createSpotIllustration("template-library-general-onboard-survey.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const RemoteOnboardSurvey = createSpotIllustration("template-library-remote-onboard-survey.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const HealthAndSafety = createSpotIllustration("template-library-health-and-safety.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const EndOfProbation = createSpotIllustration("template-library-end-of-probation.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const NewWaysOfWorking = createSpotIllustration("template-library-new-ways-of-working.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const ReOnboarding = createSpotIllustration("template-library-re-onboarding.svg")

/**
 * Template Library / Performance
 */
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Individual360 = createSpotIllustration("template-library-individual-360.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Leadership360 = createSpotIllustration("template-library-leadership-360.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Manager360 = createSpotIllustration("template-library-manager-360.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Individual180 = createSpotIllustration("template-library-individual-180.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Leadership180 = createSpotIllustration("template-library-leadership-180.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Manager180 = createSpotIllustration("template-library-manager-180.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const TeamEffectiveness1 = createSpotIllustration("template-library-team-effectiveness-1.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const TeamEffectiveness2 = createSpotIllustration("template-library-team-effectiveness-2.svg")

/**
 * Offices
 */
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const London = createSpotIllustration("offices-london.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Melbourne = createSpotIllustration("offices-melbourne.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const NewYork = createSpotIllustration("offices-new-york.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const SanFrancisco = createSpotIllustration("offices-san-francisco.svg")

/**
 * Values
 */
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const AmplifyOthers = createSpotIllustration("values-amplify-others.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const HaveTheCourageToBeVulnerable = createSpotIllustration("values-have-the-courage-to-be-vulnerable.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const LearnFasterThroughFeedback = createSpotIllustration("values-learn-faster-through-feedback.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const TrustOthersToMakeDecisions = createSpotIllustration("values-trust-others-to-make-decisions.svg")

/**
 * Template Library / COVID-19
 */
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const WellbeingSurvey = createSpotIllustration("template-library-wellbeing-survey.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Response = createSpotIllustration("template-library-response.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const RemoteWorkQSet = createSpotIllustration("template-library-remote-work-q-set.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const ReturnToWorkplace = createSpotIllustration("template-library-return-to-workplace.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const PulseSurvey = createSpotIllustration("template-library-pulse-survey.svg")

/**
 * New Account
 */
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const AccountBasics = createSpotIllustration("new-account-account-basics.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const CompanyDetails = createSpotIllustration("new-account-company-details.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const EmployeeData = createSpotIllustration("new-account-employee-data.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Gdpr = createSpotIllustration("new-account-gdpr.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Timezone = createSpotIllustration("new-account-timezone.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const AddUser = createSpotIllustration("new-account-add-user.svg")

/**
 * Skills Coach (previously referred to as Manager Learning)
 */
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Strategy = createSpotIllustration("skills-coach-strategy.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Resilience = createSpotIllustration("skills-coach-resilience.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const EssentialResilience = createSpotIllustration("skills-coach-essential-resillience.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const RemoteManager = createSpotIllustration("skills-coach-remote-manager.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Productivity = createSpotIllustration("skills-coach-productivity.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const EssentialProductivity = createSpotIllustration("skills-coach-essential-productivity.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const InfluentialCommunication = createSpotIllustration("skills-coach-influential-communication.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const LeadingChange = createSpotIllustration("skills-coach-leading-change.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const ManagerLearning = createSpotIllustration("skills-coach-manager-learning.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Feedback = createSpotIllustration("skills-coach-feedback.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Coaching = createSpotIllustration("skills-coach-coaching.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const OneOnOne = createSpotIllustration("skills-coach-1-on-1.svg")

/**
 * Miscellaneous
 */
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const ActionPlans = createSpotIllustration("miscellaneous-action-plans.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const BCorp = createSpotIllustration("miscellaneous-b-corp.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Behaviour = createSpotIllustration("miscellaneous-behavior.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const ChangeAgents = createSpotIllustration("miscellaneous-change-agents.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Communications = createSpotIllustration("miscellaneous-communications.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Community = createSpotIllustration("miscellaneous-community.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Company = createSpotIllustration("miscellaneous-company.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Conversations = createSpotIllustration("miscellaneous-conversations.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const DataVisualization = createSpotIllustration("miscellaneous-data-visualization.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Goals = createSpotIllustration("miscellaneous-goals.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Insights = createSpotIllustration("miscellaneous-insights.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Learn = createSpotIllustration("miscellaneous-learn.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Microphone = createSpotIllustration("miscellaneous-microphone.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const PaperPen = createSpotIllustration("miscellaneous-paper-pen.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const PowerfulInsights = createSpotIllustration("miscellaneous-powerful-insights.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Privacy = createSpotIllustration("miscellaneous-privacy.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Process = createSpotIllustration("miscellaneous-process.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Resources = createSpotIllustration("miscellaneous-resources.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const ScienceBackedTools = createSpotIllustration("miscellaneous-science-backed-tools.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const SkillsDevelopment = createSpotIllustration("miscellaneous-skills-development.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const ViewReports = createSpotIllustration("miscellaneous-view-reports.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const ReadArticle = createSpotIllustration("miscellaneous-read-article.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const FastAction = createSpotIllustration("miscellaneous-fast-action.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const BaselineSurvey = createSpotIllustration("miscellaneous-baseline-survey.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const SpreadsheetTemplate = createSpotIllustration("miscellaneous-spreadsheet-template.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const AddImage = createSpotIllustration("miscellaneous-add-image.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const MeetingVoices = createSpotIllustration("miscellaneous-meeting-voices.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Workshop = createSpotIllustration("miscellaneous-workshop.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Video = createSpotIllustration("miscellaneous-video.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const ReportSharing = createSpotIllustration("miscellaneous-report-sharing.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const BlankSurvey = createSpotIllustration("miscellaneous-blank-survey.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const TakeAim = createSpotIllustration("miscellaneous-take-aim.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Action = createSpotIllustration("miscellaneous-action.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Training1 = createSpotIllustration("miscellaneous-training-1.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Training2 = createSpotIllustration("miscellaneous-training-2.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Training3 = createSpotIllustration("miscellaneous-training-3.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const ShareReport = createSpotIllustration("miscellaneous-share-report.svg")

// TODO: Component Name change
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Team1 = createSpotIllustration("miscellaneous-team-1.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Team2 = createSpotIllustration("miscellaneous-team-2.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Templates = createSpotIllustration("miscellaneous-templates.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const ExecutiveReportSharing = createSpotIllustration("miscellaneous-executive-report-sharing.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const ManagerReportSharing = createSpotIllustration("miscellaneous-manager-report-sharing.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const LeaderReportSharing = createSpotIllustration("miscellaneous-leader-report-sharing.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Alarm = createSpotIllustration("miscellaneous-alarm.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Fire = createSpotIllustration("miscellaneous-fire.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Fireworks = createSpotIllustration("miscellaneous-fireworks.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const FullImport = createSpotIllustration("miscellaneous-full-import.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const HrisImport = createSpotIllustration("miscellaneous-hris-import.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const PartialImport = createSpotIllustration("miscellaneous-partial-import.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Starburst = createSpotIllustration("miscellaneous-starburst.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Stop = createSpotIllustration("miscellaneous-stop.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const TrafficCone = createSpotIllustration("miscellaneous-traffic-cone.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Trophy = createSpotIllustration("miscellaneous-trophy.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const UnderConstruction = createSpotIllustration("miscellaneous-under-construction.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const ValueAdd = createSpotIllustration("miscellaneous-value-add.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Recommendation = createSpotIllustration("miscellaneous-recommendation.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const Objective = createSpotIllustration("miscellaneous-objective.svg")
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
/* prettier-ignore */ export const CalendarSync = createSpotIllustration("miscellaneous-calendar-sync.svg")
