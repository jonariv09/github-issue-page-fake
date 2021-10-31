import "./GithubIssuesScreen.css";
import { Navbar } from "components/shared/Navbar/Navbar";
import {
	FiTerminal,
	FiGitPullRequest,
	FiPlayCircle,
	FiBookOpen,
	FiCrosshair,
	FiArchive,
	FiShield,
	FiTrendingUp,
	FiSettings,
	FiBookmark,
  FiStar,
  FiGitMerge
} from "react-icons/fi";
import { CreateIssueScreen } from "./CreateIssueScreen/CreateIssueScreen";

export const GithubIssuesScreen = () => {

	

	return (
		<>
			<Navbar />
			<nav class="navbar navbar-light bg-light border-bottom navbar-githubissues">
        <div className="container-fluid mb-3">
          <div className="container-information ms-3">
            <div className="container-names">
              <FiBookmark />
              <a href="#"> jonariv09 </a> / <a className="project-name" href="#"> my-project </a>
              <span class="badge bg-light border badge-type-project rounded-pill">Light</span>
            </div>
          </div>

          <div className="container-buttons ms-3 me-5 d-flex">
            <div class="btn-group ">
              <button class="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Small button
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
                ...
              </ul>
            </div>

            <button type="button" class="btn btn-outline-secondary btn-sm d-flex align-items-center ms-1">
              <FiStar />
              Star
            </button>

            <button type="button" class="btn btn-outline-secondary btn-sm d-flex align-items-center ms-1">
              <FiGitMerge />
              Fork
            </button>

          </div>

        </div>


				<div class="container-fluid">

					<ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row align-items-between navbar-nav-githubissues">
						<li class="nav-item">
							<a class="nav-link d-flex align-items-center" href="#">
								<FiTerminal className="me-1" />
								Code
							</a>
						</li>

						<li class="nav-item">
							<a class="nav-link d-flex align-items-center" href="#">
								<FiCrosshair className="me-1" />
								Issues
							</a>
						</li>

						<li class="nav-item">
							<a class="nav-link d-flex align-items-center" href="#">
								<FiGitPullRequest className="me-1" />
								Pull Requests
							</a>
						</li>

						<li class="nav-item">
							<a class="nav-link d-flex align-items-center" href="#">
								<FiPlayCircle className="me-1" />
								Actions
							</a>
						</li>

						<li class="nav-item">
							<a class="nav-link d-flex align-items-center" href="#">
								<FiArchive className="me-1" />
								Projects
							</a>
						</li>

						<li class="nav-item">
							<a class="nav-link d-flex align-items-center" href="#">
								<FiBookOpen className="me-1" />
								Wiki
							</a>
						</li>

						<li class="nav-item">
							<a class="nav-link d-flex align-items-center" href="#">
								<FiShield className="me-1" />
								Secutiry
							</a>
						</li>

						<li class="nav-item">
							<a class="nav-link d-flex align-items-center" href="#">
								<FiTrendingUp className="me-1" />
								Insights
							</a>
						</li>

						<li class="nav-item">
							<a class="nav-link d-flex align-items-center" href="#">
								<FiSettings className="me-1" />
								Settings
							</a>
						</li>
					</ul>
				</div>
			</nav>

      <div>


        <CreateIssueScreen />

      </div>
		</>
	);
};
