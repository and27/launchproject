export const roadmapMarkup = `
<div class="container">
<section class="roadmap__container">
    <aside class="roadmap__side">
        <ul class="roadmap__days">
            <li class="roadmap__day roadmap__day--active" aria-controls="day1"> 1 The mission</li>
            <li class="roadmap__day" aria-controls="day2" aria-describedby="tooltip-2"> 2 The value proposition</li>
            <li class="roadmap__day" aria-controls="day3" aria-describedby="tooltip-3"> 3 The prototype</li>
            <li class="roadmap__day" aria-controls="day4"> 4 The validation</li>

            <div class="roadmap__day-wrapper">
                <li class="roadmap__day " aria-controls="day5"> 5 The initial cost</li>
                <div id="tooltip-2" role="tooltip">Complete the previous day</div>
            </div>
            <li class="roadmap__day roadmap__day--blocked" aria-controls="day6"> 6 The scaling</li>
        </ul>
    </aside>
    <div class="roadmap__content">
    </div>
</section>
</div>
`;
