DROP TABLE IF EXISTS `tickets`;
DROP TABLE IF EXISTS `events`;

CREATE TABLE `events` (
    `id` INTEGER PRIMARY KEY AUTOINCREMENT,
    `name` TEXT NOT NULL,
    `description` text NOT NULL,
    `ticket_price` INTEGER NOT NULL,
    `date` TEXT NOT NULL,
    `location` TEXT NOT NULL,
    `created_at` TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `tickets` (
    `id` INTEGER PRIMARY KEY AUTOINCREMENT,
    `event_id` INTEGER NOT NULL,
    `email` TEXT NOT NULL,
    `quantity` INTEGER NOT NULL,
    `created_at` TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(`event_id`) REFERENCES `events`(`id`)
);

INSERT INTO
    `events` (
        `name`,
        `description`,
        `date`,
        `ticket_price`,
        `location`
    )
VALUES
    (
        'Event 1',
        'Description 1',
        '2020-01-01',
        10000,
        'Location 1'
    );