plugins {
    alias(libs.plugins.kotlin.jvm)
}

kotlin {
    jvmToolchain(17)

    sourceSets {
        main {
            dependencies {
                implementation(project(":core"))
            }
        }
    }
}
