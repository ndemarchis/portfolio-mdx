import { Client } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { ExtractResponse } from "../../utils/notionUtils";

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

  type Formula = ExtractResponse<"formula">;
  const data = calendarData.map((entry) => ({
    lastEditedTime: entry.last_edited_time,
    title: (entry.properties.Name as ExtractResponse<"title">).title
      .map((section) => section.plain_text)
      .join(""),
    slug: (
      (entry.properties.slug as Formula).formula as Extract<
        Formula["formula"],
        { type: "string" }
      >
    ).string,
    type: (entry.properties.type as ExtractResponse<"select", "type">).select,
    date: (entry.properties.date as ExtractResponse<"date">).date,
    case: (entry.properties.case as ExtractResponse<"multi_select", "case">)
      .multi_select,
    location: (
      entry.properties.location as ExtractResponse<"multi_select", "location">
    ).multi_select,
    icon: entry.icon,
    cover: entry.cover,
  }));

  return (
    <>
      <div className="max-w-xl p-8 mx-auto  ">
        <ul className="space-y-12">
          {data.map((entry, index) => {
            return (
              <li key={index} className="flex items-start space-x-3">
                <span className="flex items-center h-8 text-sm">
                  {" "}
                  {/** previously an a tag */}
                  {entry?.icon?.type === "emoji" && entry.icon.emoji}
                </span>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between space-x-4 ">
                    <span className="inline-flex items-start space-x-2">
                      <span // previously an a tag
                        className="inline-flex items-center px-3 py-1 my-1 space-x-2 text-sm border rounded-full group "
                      >
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 rounded-full"
                        ></span>
                        <span className="group-hover:underline">
                          {entry.type?.name}
                        </span>
                      </span>
                      <span>{entry.title}</span>
                    </span>
                    <span className="text-xs whitespace-nowrap">
                      {new Date(entry.date?.start || "").toLocaleDateString(
                        undefined,
                        { dateStyle: "full" }
                      )}
                    </span>
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Tincidunt nunc ipsum tempor purus vitae id. Morbi in
                      vestibulum nec varius. Et diam cursus quis sed purus nam.
                      Scelerisque amet elit non sit ut tincidunt condimentum.
                      Nisl ultrices eu venenatis diam.
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TrumpCalendar;
