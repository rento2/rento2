import { IIconClassProps } from '../types/iconTypes'
import classNames from 'classnames'
import styles from '../IconBaseStyles.module.scss'

export const IconFridge = (props: IIconClassProps): JSX.Element => {
  return (
    <svg className={ classNames(styles['icon-lien'], props.classProps) }
      height="24"
      viewBox="0 0 18 24"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.9937 5.60624C17.1879 5.60624 17.3453 5.44883 17.3453 5.25468V1.31493C17.3452 0.589874 16.7554 0 16.0303 0H1.96942C1.24435 0 0.65448 0.589874 0.65448 1.31498V21.219C0.65448 21.944 1.24435 22.5339 1.96946 22.5339H2.21504V23.1744C2.21504 23.6296 2.5854 24 3.04065 24H4.03782C4.49307 24 4.86343 23.6296 4.86343 23.1744V22.5339H13.1365V23.1744C13.1365 23.6296 13.5069 24 13.9621 24H14.9593C15.4145 24 15.7849 23.6296 15.7849 23.1744V22.5339H16.0305C16.7555 22.5339 17.3455 21.9441 17.3455 21.219V5.2094C17.3455 5.01524 17.1881 4.85783 16.9939 4.85783C16.7997 4.85783 16.6423 5.01524 16.6423 5.2094V8.07219H4.97312C4.77897 8.07219 4.62156 8.22959 4.62156 8.42375C4.62156 8.61791 4.77897 8.77531 4.97312 8.77531H16.6422V21.219C16.6422 21.5564 16.3677 21.8309 16.0303 21.8309H1.96942C1.63206 21.8309 1.35756 21.5564 1.35756 21.219V8.77526H4.99149C5.18564 8.77526 5.34305 8.61786 5.34305 8.4237C5.34305 8.22955 5.18564 8.07214 4.99149 8.07214H1.35756V1.31498C1.35756 0.977623 1.63206 0.703124 1.96942 0.703124H16.0303C16.3677 0.703124 16.6422 0.977623 16.6422 1.31498V5.25472C16.6422 5.44883 16.7995 5.60624 16.9937 5.60624ZM4.16021 23.1743C4.16021 23.2419 4.10527 23.2968 4.03772 23.2968H3.04055C2.97301 23.2968 2.91807 23.2419 2.91807 23.1743V22.5339H4.16021V23.1743ZM15.0816 23.1743C15.0816 23.2419 15.0267 23.2968 14.9591 23.2968H13.9619C13.8944 23.2968 13.8395 23.2419 13.8395 23.1743V22.5339H15.0816V23.1743Z" />
      <path d="M2.25043 2.74794V6.02741C2.25043 6.57645 2.6971 7.02312 3.24614 7.02312C3.79519 7.02312 4.24186 6.57645 4.24186 6.02741V2.74794C4.24186 2.1989 3.79519 1.75223 3.24614 1.75223C2.6971 1.75223 2.25043 2.1989 2.25043 2.74794ZM3.53878 2.74794V6.02741C3.53878 6.18875 3.40749 6.32 3.24614 6.32C3.0848 6.32 2.9535 6.18875 2.9535 6.02741V2.74794C2.9535 2.5866 3.0848 2.4553 3.24614 2.4553C3.40749 2.4553 3.53878 2.5866 3.53878 2.74794Z" />
      <path d="M2.25043 10.5967V13.8762C2.25043 14.4252 2.6971 14.8719 3.24614 14.8719C3.79519 14.8719 4.24186 14.4252 4.24186 13.8762V10.5967C4.24186 10.0477 3.79519 9.60101 3.24614 9.60101C2.6971 9.60101 2.25043 10.0477 2.25043 10.5967ZM3.53878 10.5967V13.8762C3.53878 14.0375 3.40749 14.1688 3.24614 14.1688C3.0848 14.1688 2.9535 14.0375 2.9535 13.8762V10.5967C2.9535 10.4354 3.0848 10.3041 3.24614 10.3041C3.40749 10.3041 3.53878 10.4354 3.53878 10.5967Z" />
    </svg>
  )
}