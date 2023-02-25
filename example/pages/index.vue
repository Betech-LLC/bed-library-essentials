<template>
    <div class="container py-10 space-y-10">
        <JImageDynamic name="logo" alt="asd" />
        <JLink href="/">CoreLink</JLink>

        <div class="space-y-2">
            <div class="flex space-x-2">
                <JButton label="Button" class="btn-primary btn-lg" />
                <JButton label="Button" class="btn-secondary btn-lg" />
                <JButton label="Button" class="btn-success btn-lg" />
                <JButton label="Button" class="btn-warning btn-lg" />
                <JButton label="Button" class="btn-danger btn-lg" />
            </div>
            <div class="flex space-x-2">
                <JButton label="Button" class="btn-primary" />
                <JButton label="Button" class="btn-secondary" />
                <JButton label="Button" class="btn-success" />
                <JButton label="Button" class="btn-warning" />
                <JButton label="Button" class="btn-danger" />
            </div>
            <div class="flex space-x-2">
                <JButton label="Button" class="btn-primary btn-sm" />
                <JButton label="Button" class="btn-secondary btn-sm" />
                <JButton label="Button" class="btn-success btn-sm" />
                <JButton label="Button" class="btn-warning btn-sm" />
                <JButton label="Button" class="btn-danger btn-sm" />
            </div>
        </div>
        <JAccordion
            :items="[
                {
                    title: 'Accordion item 1',
                    content:
                        'Yes, you can try us for free for 30 days. If you want, we\’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
                    active: false,
                },
                {
                    title: 'Accordion item 2',
                    content:
                        'WARN  warn - No utility classes were detected in your source files. If this is unexpected, double-check the content option in your Tailwind CSS configuration.WARN warn - No utility classes were detected in your source files. If this is unexpected, double-check the content option in your Tailwind CSS configuration.',
                    active: false,
                },
                {
                    title: 'Accordion item 3',
                    content: 'Content of accordion item 3',
                    active: true,
                },
            ]"
        />
        <JBreadcrumb
            :items="[
                {
                    title: 'Accordion Item 1',
                    link: 'Accordion Item 1',
                },
                {
                    title: 'Accordion Item 1',
                    link: 'Accordion Item 1',
                },
                {
                    title: 'Accordion Item 1',
                    link: 'Accordion Item 1',
                },
            ]"
        />
    </div>
    <JPagePolicy />
</template>
