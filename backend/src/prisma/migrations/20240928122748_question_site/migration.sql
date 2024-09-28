-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "userName" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Topics" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "userId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "questions" (
    "id" SERIAL NOT NULL,
    "questionName" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "topicId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_userName_key" ON "User"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "Topics_id_key" ON "Topics"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Topics_title_key" ON "Topics"("title");

-- CreateIndex
CREATE UNIQUE INDEX "questions_id_key" ON "questions"("id");

-- AddForeignKey
ALTER TABLE "Topics" ADD CONSTRAINT "Topics_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "questions" ADD CONSTRAINT "questions_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
