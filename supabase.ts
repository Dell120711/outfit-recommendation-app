export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      item: {
        Row: {
          clothing_type: string | null
          color: string | null
          embedding: string | null
          external_link: string | null
          gender: string | null
          id: string
          image_url: string | null
          label_string: string | null
          price: number | null
          provider: string | null
          series_id: string
          title: string
        }
        Insert: {
          clothing_type?: string | null
          color?: string | null
          embedding?: string | null
          external_link?: string | null
          gender?: string | null
          id?: string
          image_url?: string | null
          label_string?: string | null
          price?: number | null
          provider?: string | null
          series_id?: string
          title: string
        }
        Update: {
          clothing_type?: string | null
          color?: string | null
          embedding?: string | null
          external_link?: string | null
          gender?: string | null
          id?: string
          image_url?: string | null
          label_string?: string | null
          price?: number | null
          provider?: string | null
          series_id?: string
          title?: string
        }
        Relationships: []
      }
      item_old: {
        Row: {
          embedding: string | null
          id: number
          image_url: string | null
          label_string: string | null
        }
        Insert: {
          embedding?: string | null
          id?: number
          image_url?: string | null
          label_string?: string | null
        }
        Update: {
          embedding?: string | null
          id?: number
          image_url?: string | null
          label_string?: string | null
        }
        Relationships: []
      }
      item_old2: {
        Row: {
          clothing_type: string | null
          color: string | null
          embedding: string | null
          external_link: string | null
          gender: Database["public"]["Enums"]["gender"] | null
          id: string
          image_url: string
          label_string: string | null
          price: string | null
          provider: string | null
          series_id: string | null
          title: string | null
        }
        Insert: {
          clothing_type?: string | null
          color?: string | null
          embedding?: string | null
          external_link?: string | null
          gender?: Database["public"]["Enums"]["gender"] | null
          id?: string
          image_url: string
          label_string?: string | null
          price?: string | null
          provider?: string | null
          series_id?: string | null
          title?: string | null
        }
        Update: {
          clothing_type?: string | null
          color?: string | null
          embedding?: string | null
          external_link?: string | null
          gender?: Database["public"]["Enums"]["gender"] | null
          id?: string
          image_url?: string
          label_string?: string | null
          price?: string | null
          provider?: string | null
          series_id?: string | null
          title?: string | null
        }
        Relationships: []
      }
      param: {
        Row: {
          clothing_type: Database["public"]["Enums"]["clothing_type"] | null
          created_at: string
          gender: Database["public"]["Enums"]["gender"] | null
          id: number
          model: string | null
        }
        Insert: {
          clothing_type?: Database["public"]["Enums"]["clothing_type"] | null
          created_at?: string
          gender?: Database["public"]["Enums"]["gender"] | null
          id?: number
          model?: string | null
        }
        Update: {
          clothing_type?: Database["public"]["Enums"]["clothing_type"] | null
          created_at?: string
          gender?: Database["public"]["Enums"]["gender"] | null
          id?: number
          model?: string | null
        }
        Relationships: []
      }
      profile: {
        Row: {
          avatar_url: string | null
          created_at: string
          user_id: string
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          user_id: string
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          user_id?: string
          username?: string | null
        }
        Relationships: []
      }
      recommendation: {
        Row: {
          created_at: string
          id: number
          param_id: number | null
          upload_id: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          param_id?: number | null
          upload_id?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          param_id?: number | null
          upload_id?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "recommendation_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profile"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "recommendations_param_id_fkey"
            columns: ["param_id"]
            isOneToOne: false
            referencedRelation: "param"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recommendations_upload_id_fkey"
            columns: ["upload_id"]
            isOneToOne: false
            referencedRelation: "upload"
            referencedColumns: ["id"]
          },
        ]
      }
      result: {
        Row: {
          created_at: string
          distance: number | null
          id: number
          item_id: string | null
          suggestion_id: number | null
        }
        Insert: {
          created_at?: string
          distance?: number | null
          id?: number
          item_id?: string | null
          suggestion_id?: number | null
        }
        Update: {
          created_at?: string
          distance?: number | null
          id?: number
          item_id?: string | null
          suggestion_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "result_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "female_item_matview"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "result_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "item"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "result_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "male_item_matview"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "result_suggestion_id_fkey"
            columns: ["suggestion_id"]
            isOneToOne: false
            referencedRelation: "suggestion"
            referencedColumns: ["id"]
          },
        ]
      }
      series: {
        Row: {
          clothing_type: string | null
          external_link: string | null
          gender: Database["public"]["Enums"]["gender"] | null
          id: string
          price: string | null
          provider: string | null
          title: string | null
        }
        Insert: {
          clothing_type?: string | null
          external_link?: string | null
          gender?: Database["public"]["Enums"]["gender"] | null
          id: string
          price?: string | null
          provider?: string | null
          title?: string | null
        }
        Update: {
          clothing_type?: string | null
          external_link?: string | null
          gender?: Database["public"]["Enums"]["gender"] | null
          id?: string
          price?: string | null
          provider?: string | null
          title?: string | null
        }
        Relationships: []
      }
      suggestion: {
        Row: {
          created_at: string
          description: string | null
          id: number
          label_string: string | null
          recommendation_id: number | null
          style_name: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          label_string?: string | null
          recommendation_id?: number | null
          style_name?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          label_string?: string | null
          recommendation_id?: number | null
          style_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "suggestions_recommendation_id_fkey"
            columns: ["recommendation_id"]
            isOneToOne: false
            referencedRelation: "recommendation"
            referencedColumns: ["id"]
          },
        ]
      }
      upload: {
        Row: {
          created_at: string
          id: number
          image_url: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          image_url?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          image_url?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "upload_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profile"
            referencedColumns: ["user_id"]
          },
        ]
      }
      user_activity_log: {
        Row: {
          created_at: string
          description: string | null
          id: number
          user_id: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          user_id?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_activity_log_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profile"
            referencedColumns: ["user_id"]
          },
        ]
      }
    }
    Views: {
      female_item_matview: {
        Row: {
          color: string | null
          embedding: string | null
          id: string | null
          image_url: string | null
          label_string: string | null
          series_id: string | null
        }
        Relationships: []
      }
      male_item_matview: {
        Row: {
          color: string | null
          embedding: string | null
          id: string | null
          image_url: string | null
          label_string: string | null
          series_id: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      query_similar_female_items: {
        Args: {
          query_embedding: string
          match_threshold: number
          max_item_count: number
        }
        Returns: unknown[]
      }
      query_similar_items:
        | {
            Args: Record<PropertyKey, never>
            Returns: {
              created_at: string
              id: number
              image_url: string | null
              user_id: string | null
            }[]
          }
        | {
            Args: {
              input_embedding: string
              match_threshold: number
            }
            Returns: {
              embedding: string | null
              id: number
              image_url: string | null
              label_string: string | null
            }[]
          }
        | {
            Args: {
              query_embedding: string
              match_threshold: number
              max_item_count: number
            }
            Returns: {
              clothing_type: string | null
              color: string | null
              embedding: string | null
              external_link: string | null
              gender: Database["public"]["Enums"]["gender"] | null
              id: string
              image_url: string
              label_string: string | null
              price: string | null
              provider: string | null
              series_id: string | null
              title: string | null
            }[]
          }
      query_similar_male_items: {
        Args: {
          query_embedding: string
          match_threshold: number
          max_item_count: number
        }
        Returns: unknown[]
      }
      test: {
        Args: Record<PropertyKey, never>
        Returns: {
          created_at: string
          id: number
          image_url: string | null
          user_id: string | null
        }[]
      }
    }
    Enums: {
      body_type: "slim" | "average" | "athletic" | "curvy"
      clothing_type: "top" | "bottom"
      gender: "male" | "female" | "neutral"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
