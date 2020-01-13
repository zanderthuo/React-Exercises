import React, { Component } from 'react'

export default class SectionHomeSection extends Component {
    render() {
        return (
            <div>
                <section>
                    <div id="home-section" class="hero" />
                        <div class="home-slider  owl-carousel">
                            <div class="slider-item ">
                                <div class="overlay"></div>
                            <div class="container">
                                <div class="row d-md-flex no-gutters slider-text align-items-end justify-content-end" data-scrollax-parent="true">
                                    <div class="one-third js-fullheight order-md-last img">
                                        <div class="overlay"></div>
                                    </div>
                                    <div class="one-forth d-flex  align-items-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                                        <div class="text">
                                            <span class="subheading">Hello!</span>
                                        <h1 class="mb-4 mt-3">I'm <span>ALexander Thuo</span></h1>
                                        <h2 class="mb-4">A Junior Web Developer</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
