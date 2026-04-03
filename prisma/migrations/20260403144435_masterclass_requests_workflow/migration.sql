-- CreateTable
CREATE TABLE "MasterclassRequest" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "eventId" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "alias" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "ageRange" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "associationName" TEXT,
    "associationRole" TEXT,
    "representedArtist" TEXT NOT NULL,
    "profession" TEXT NOT NULL,
    "socialLinks" TEXT NOT NULL,
    "yearsInIndustry" TEXT NOT NULL,
    "bioText" TEXT,
    "cvFilePath" TEXT,
    "cvOriginalName" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "reviewedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "MasterclassRequest_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "MasterclassRequest_eventId_idx" ON "MasterclassRequest"("eventId");

-- CreateIndex
CREATE INDEX "MasterclassRequest_status_idx" ON "MasterclassRequest"("status");
