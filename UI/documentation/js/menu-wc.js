'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ui documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-ea22a99797b68dcacb72be6f5cac0a4c"' : 'data-target="#xs-components-links-module-AppModule-ea22a99797b68dcacb72be6f5cac0a4c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-ea22a99797b68dcacb72be6f5cac0a4c"' :
                                            'id="xs-components-links-module-AppModule-ea22a99797b68dcacb72be6f5cac0a4c"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShellComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShellComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SideNavComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SideNavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TopNavComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TopNavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-ea22a99797b68dcacb72be6f5cac0a4c"' : 'data-target="#xs-injectables-links-module-AppModule-ea22a99797b68dcacb72be6f5cac0a4c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-ea22a99797b68dcacb72be6f5cac0a4c"' :
                                        'id="xs-injectables-links-module-AppModule-ea22a99797b68dcacb72be6f5cac0a4c"' }>
                                        <li class="link">
                                            <a href="injectables/AuthenticationService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthenticationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-c38a228a12e5536d608b0b6c0c7d8593"' : 'data-target="#xs-components-links-module-HomeModule-c38a228a12e5536d608b0b6c0c7d8593"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-c38a228a12e5536d608b0b6c0c7d8593"' :
                                            'id="xs-components-links-module-HomeModule-c38a228a12e5536d608b0b6c0c7d8593"' }>
                                            <li class="link">
                                                <a href="components/BlogsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BlogsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpcomingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UpcomingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-HomeModule-c38a228a12e5536d608b0b6c0c7d8593"' : 'data-target="#xs-injectables-links-module-HomeModule-c38a228a12e5536d608b0b6c0c7d8593"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HomeModule-c38a228a12e5536d608b0b6c0c7d8593"' :
                                        'id="xs-injectables-links-module-HomeModule-c38a228a12e5536d608b0b6c0c7d8593"' }>
                                        <li class="link">
                                            <a href="injectables/BlogsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>BlogsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UpcomingService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UpcomingService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link">HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link">MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PracticeModule.html" data-type="entity-link">PracticeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PracticeModule-4066e8c4a02b701d78d35353ece7eb04"' : 'data-target="#xs-components-links-module-PracticeModule-4066e8c4a02b701d78d35353ece7eb04"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PracticeModule-4066e8c4a02b701d78d35353ece7eb04"' :
                                            'id="xs-components-links-module-PracticeModule-4066e8c4a02b701d78d35353ece7eb04"' }>
                                            <li class="link">
                                                <a href="components/PracticeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PracticeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PracticeModule-4066e8c4a02b701d78d35353ece7eb04"' : 'data-target="#xs-injectables-links-module-PracticeModule-4066e8c4a02b701d78d35353ece7eb04"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PracticeModule-4066e8c4a02b701d78d35353ece7eb04"' :
                                        'id="xs-injectables-links-module-PracticeModule-4066e8c4a02b701d78d35353ece7eb04"' }>
                                        <li class="link">
                                            <a href="injectables/QuestionDescriptionService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>QuestionDescriptionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PracticeRoutingModule.html" data-type="entity-link">PracticeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-ec9109e6de386f67327cf649c9bfb328"' : 'data-target="#xs-components-links-module-SharedModule-ec9109e6de386f67327cf649c9bfb328"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-ec9109e6de386f67327cf649c9bfb328"' :
                                            'id="xs-components-links-module-SharedModule-ec9109e6de386f67327cf649c9bfb328"' }>
                                            <li class="link">
                                                <a href="components/CodeEditorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CodeEditorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuestionDescriptionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">QuestionDescriptionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-ec9109e6de386f67327cf649c9bfb328"' : 'data-target="#xs-directives-links-module-SharedModule-ec9109e6de386f67327cf649c9bfb328"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-ec9109e6de386f67327cf649c9bfb328"' :
                                        'id="xs-directives-links-module-SharedModule-ec9109e6de386f67327cf649c9bfb328"' }>
                                        <li class="link">
                                            <a href="directives/RunScriptsDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">RunScriptsDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-ec9109e6de386f67327cf649c9bfb328"' : 'data-target="#xs-pipes-links-module-SharedModule-ec9109e6de386f67327cf649c9bfb328"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-ec9109e6de386f67327cf649c9bfb328"' :
                                            'id="xs-pipes-links-module-SharedModule-ec9109e6de386f67327cf649c9bfb328"' }>
                                            <li class="link">
                                                <a href="pipes/SafeHtmlPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SafeHtmlPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/TimeConversionPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TimeConversionPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SpacesModule.html" data-type="entity-link">SpacesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SpacesModule-0f5e1a3f017aac6e7f675bb5ef0fda72"' : 'data-target="#xs-components-links-module-SpacesModule-0f5e1a3f017aac6e7f675bb5ef0fda72"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SpacesModule-0f5e1a3f017aac6e7f675bb5ef0fda72"' :
                                            'id="xs-components-links-module-SpacesModule-0f5e1a3f017aac6e7f675bb5ef0fda72"' }>
                                            <li class="link">
                                                <a href="components/SpaceCreationFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SpaceCreationFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SpacesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SpacesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SpacesModule-0f5e1a3f017aac6e7f675bb5ef0fda72"' : 'data-target="#xs-injectables-links-module-SpacesModule-0f5e1a3f017aac6e7f675bb5ef0fda72"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SpacesModule-0f5e1a3f017aac6e7f675bb5ef0fda72"' :
                                        'id="xs-injectables-links-module-SpacesModule-0f5e1a3f017aac6e7f675bb5ef0fda72"' }>
                                        <li class="link">
                                            <a href="injectables/SpacesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SpacesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SpacesRoutingModule.html" data-type="entity-link">SpacesRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthenticationService.html" data-type="entity-link">AuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BlogsService.html" data-type="entity-link">BlogsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QuestionDescriptionService.html" data-type="entity-link">QuestionDescriptionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SpacesService.html" data-type="entity-link">SpacesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UpcomingService.html" data-type="entity-link">UpcomingService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/ApiInterceptor.html" data-type="entity-link">ApiInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/NotificationInterceptor.html" data-type="entity-link">NotificationInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/TokenInterceptor.html" data-type="entity-link">TokenInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/BlogResolver.html" data-type="entity-link">BlogResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/QuestionDescriptionResolver.html" data-type="entity-link">QuestionDescriptionResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/SpacesResolver.html" data-type="entity-link">SpacesResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/UpcomingContestResolver.html" data-type="entity-link">UpcomingContestResolver</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AuthenticationResponse.html" data-type="entity-link">AuthenticationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Interval.html" data-type="entity-link">Interval</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LoginForm.html" data-type="entity-link">LoginForm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SignUpForm.html" data-type="entity-link">SignUpForm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Space.html" data-type="entity-link">Space</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TokenData.html" data-type="entity-link">TokenData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpcomingContestDetail.html" data-type="entity-link">UpcomingContestDetail</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#pipes-links"' :
                                'data-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/RunScriptsPipe.html" data-type="entity-link">RunScriptsPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});