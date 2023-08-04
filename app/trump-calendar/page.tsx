import { Client } from "@notionhq/client";
import { NormalArticle } from "../../src/components/articles";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { convertTitle } from "../../utils/notionUtils";

async function getCalendar({
  databaseId,
  notionClient,
}: {
  notionClient: Client;
  databaseId: string;
}) {
  const response = await notionClient.databases.query({
    database_id: databaseId,
  });

  return response.results as PageObjectResponse[];
}

const TrumpCalendar = async () => {
  const notionClient = new Client({
    auth: process.env.NOTION_INTEGRATION_TOKEN_TRUMP_CALENDAR,
  });

  const calendarData = await getCalendar({
    notionClient,
    databaseId: process.env.NOTION_DATABASE_ID_TRUMP_CALENDAR || "",
  });

  const data = calendarData.map((entry) => ({
    ...entry.properties,
    name: entry.properties.Name,
    lastEditedTime: entry.last_edited_time,
    cover: entry.cover,
    icon: entry.icon,
  }));

  console.log(data);

  return (
    <NormalArticle>
      {data.map((entry, index) => {
        console.log(entry.name.title);
        return (
          <div key={index}>{convertTitle(entry.name.title)}</div>
        );
      })}
    </NormalArticle>
  );
};

export default TrumpCalendar;
