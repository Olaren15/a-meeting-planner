package dev.olaren.a_meeting_planner.core.event.entities

import java.time.Instant
import java.time.LocalDateTime
import java.util.*

/**
 * Represents an event to plan availabilities of participants.
 */
data class Event(
    /**
     * The unique identifier of the event.
     */
    val id: UUID,
    /**
     * The name of the event.
     */
    val name: String,
    /**
     * An optional description of the event.
     */
    val description: String?,
    /**
     * The timezone the event takes place in.
     */
    val timeZone: TimeZone,
    /**
     * The beginning of the event (no availability slots before this time).
     * Uses the event's time zone.
     */
    val startTime: LocalDateTime,
    /**
     * The end of the event (no availability slots after this time).
     * Uses the event's time zone.
     */
    val endTime: LocalDateTime,
    /**
     * The availability slots for the event.
     * Does not need to be sequential.
     */
    val availabilitySlot: MutableCollection<AvailabilitySlot>,
    /**
     * The participants for this event.
     */
    val participants: MutableCollection<Participant>,
    /**
     * The time at witch the event was created in UTC.
     */
    val createdAt: Instant,
    /**
     * The time at witch the event was last updated in UTC.
     */
    val updatedAt: Instant,
)
