import React from 'react'; 
import LogoGithub from '../../../assets/images/logo-github.png';
import './Narbar.css';
import { FiPlus, FiBell, FiUser } from 'react-icons/fi';

export const Navbar = () => {

  return (<>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        {/* <div class="collapse navbar-collapse" id="navbarSupportedContent"> */}
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <img className="github-logo" src={ LogoGithub } />
              </a>
            </li>

            <li class="nav-item">
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#"> Pull request </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#"> Issues </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#"> Marketplace </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#"> Explore </a>
            </li>
            
          </ul>

          <ul class="navbar-nav mb-2 mb-lg-0 d-flex align-items-center">

            <li class="nav-item me-3">
                <a class="nav-link position-relative" href="#">
                  <FiBell className="notification-bell"/>
                  <span class="absolute top-0 right-1 inline-block w-2 h-2 transform bg-red-600 rounded-full"></span>
                </a>
            </li>

            <li class="nav-item me-2 d-flex align-items-center">
              <div className="dropdown">
                <a className="btn btn-secondary dropdown-toggle d-flex align-items-center h-10" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  <FiPlus />
                </a>

                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                  <li><a class="dropdown-item" href="#">New repository</a></li>
                  <li><a class="dropdown-item" href="#"> Import respository </a></li>
                  <li><a class="dropdown-item" href="#"> New gist </a></li>
                  <li><a class="dropdown-item" href="#"> New organization </a></li>
                </ul>
              </div>
            </li>

            <li class="nav-item me-2">
              <div className="dropdown">
                <a className="btn btn-secondary dropdown-toggle d-flex align-items-center h-10" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  <FiUser />
                </a>

                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                  <li><a class="dropdown-item" href="#"> Your profile </a></li>
                  <li><a class="dropdown-item" href="#"> Your repository </a></li>
                </ul>
              </div>
            </li>

          </ul>
        {/* </div> */}
      </div>
    </nav>
  </>)

}
