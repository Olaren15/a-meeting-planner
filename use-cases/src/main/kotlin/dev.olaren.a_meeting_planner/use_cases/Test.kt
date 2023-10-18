package dev.olaren.a_meeting_planner.use_cases

import dev.olaren.a_meeting_planner.core.event.entities.AvailabilitySlot
import dev.olaren.a_meeting_planner.core.event.entities.AvailabilityStatus
import dev.olaren.a_meeting_planner.core.event.entities.Event
import dev.olaren.a_meeting_planner.core.event.entities.Participant
import java.time.Instant
import java.time.LocalDateTime
import java.util.*

class Test {
    fun test() {
        val event = Event(
            id = UUID.randomUUID(),
            name = "Test event",
            description = null,
            timeZone = TimeZone.getTimeZone("America/Toronto"),
            startTime = LocalDateTime.now(),
            endTime = LocalDateTime.now(),
            mutableListOf(
                AvailabilitySlot(
                    id = UUID.randomUUID(),
                    startTime = LocalDateTime.now(),
                    endTime = LocalDateTime.now(),
                    availabilities = mutableMapOf(
                        UUID.randomUUID() to AvailabilityStatus.Available,
                        UUID.randomUUID() to AvailabilityStatus.Unavailable
                    ),
                    createdAt = Instant.now(),
                    updatedAt = Instant.now(),
                ),
                AvailabilitySlot(
                    id = UUID.randomUUID(),
                    startTime = LocalDateTime.now(),
                    endTime = LocalDateTime.now(),
                    availabilities = mutableMapOf(
                        UUID.randomUUID() to AvailabilityStatus.Available,
                        UUID.randomUUID() to AvailabilityStatus.Unavailable
                    ),
                    createdAt = Instant.now(),
                    updatedAt = Instant.now(),
                ),
            ),
            participants = mutableListOf(
                Participant(
                    UUID.randomUUID(),
                    "jeff",
                    null,
                    Instant.now(),
                    Instant.now(),
                ),
                Participant(
                    UUID.randomUUID(),
                    "bezos",
                    null,
                    Instant.now(),
                    Instant.now(),
                ),
            ),
            createdAt = Instant.now(),
            updatedAt = Instant.now(),
        )
    }
}
