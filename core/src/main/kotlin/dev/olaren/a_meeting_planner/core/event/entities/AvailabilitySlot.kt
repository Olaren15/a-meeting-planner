package dev.olaren.a_meeting_planner.core.event.entities

import java.time.Instant
import java.time.LocalDateTime
import java.util.*

/**
 * Represents an availability slot for an [Event] (ex: 8:30 AM to 9:00 AM).
 */
data class AvailabilitySlot(
    /**
     * The unique identifier of the availability slot.
     */
    val id: UUID,
    /**
     * The start time of this availability slot.
     * Relative to the [Event]'s time zone.
     */
    val startTime: LocalDateTime,
    /**
     * The end time of this availability slot.
     * Relative to the [Event]'s time zone.
     */
    val endTime: LocalDateTime,
    /**
     * A map of availabilities by user id.
     */
    val availabilities: MutableMap<UUID, AvailabilityStatus>,
    /**
     * The time at witch the availability slot was created in UTC.
     */
    val createdAt: Instant,
    /**
     * The time at witch the availability slot was last updated in UTC.
     */
    val updatedAt: Instant,
)
